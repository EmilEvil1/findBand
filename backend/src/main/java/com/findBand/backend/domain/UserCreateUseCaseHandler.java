package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.exceptions.FindBandValidationException;
import com.findBand.backend.domain.model.*;
import com.findBand.backend.domain.port.BandPort;
import com.findBand.backend.domain.port.RegionsPort;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserCreate;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
@Slf4j
public class UserCreateUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<UserDomain, UserCreate> {

    private BandPort bandPort;
    private PasswordEncoder passwordEncoder;
    private UserPort userPort;
    private RegionsPort regionsPort;

    public UserCreateUseCaseHandler(BandPort bandPort, PasswordEncoder passwordEncoder,
                                    UserPort userPort, RegionsPort regionsPort) {
        this.bandPort = bandPort;
        this.passwordEncoder = passwordEncoder;
        this.userPort = userPort;
        this.regionsPort = regionsPort;
        register(UserCreate.class, this);
    }

    @Override
    public UserDomain handle(UserCreate useCase) {

        if (userPort.doUserExists(useCase.getEmail())) {
            log.info("User with such email: {} already exists", useCase.getEmail());
            throw new FindBandValidationException("registration.email.already.exists");
        }

        //TODO: refactore to using factory
        boolean isBandOwner = useCase.getUserRoleEnum() == UserRoleEnum.BAND_OWNER;
        UserDomain userDomain = new UserDomain();
        userDomain.setEmail(useCase.getEmail());
        userDomain.setPassword(useCase.getPassword(), passwordEncoder, useCase.getConfirmationPassword());
        userDomain.setUsername(useCase.getUserName());
        userDomain.setPhone(useCase.getPhone());
        userDomain.setUserRole(isBandOwner ? UserRole.BAND_OWNER : UserRole.BAND_SEEKER);
        userDomain.setInstruments(useCase.getInstrumentIds().stream().map(Instrument::new).collect(Collectors.toSet()));
        userDomain.setRegion(regionsPort.findById(useCase.getRegionId()));
        //TODO: CREATING USER METHOD SHOULD BE TRANSACTIONAL AND INCLUDES LOGIC OF BAND CREATION
        userPort.createUser(userDomain);
        if (isBandOwner) {
            Band newBand = new Band();
            newBand.setName(useCase.getBandName());

            newBand.setBandOwner(userDomain);
            bandPort.createBand(newBand);
        }

        return userDomain;
    }
}
