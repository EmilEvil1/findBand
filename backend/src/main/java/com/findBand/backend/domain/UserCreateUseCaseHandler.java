package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.exceptions.FindBandValidationException;
import com.findBand.backend.domain.model.Band;
import com.findBand.backend.domain.model.Instrument;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.model.UserRole;
import com.findBand.backend.domain.model.UserRoleEnum;
import com.findBand.backend.domain.port.BandPort;
import com.findBand.backend.domain.port.RegionsPort;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserCreate;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.HashSet;

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
    public Class<UserCreate> useCaseClass() {
        return UserCreate.class;
    }

    @Override
    @Transactional(isolation = Isolation.READ_COMMITTED)
    public UserDomain handle(UserCreate useCase) {
        if (userPort.doUserExists(useCase.getEmail())) {
            log.info("User with such email: {} already exists", useCase.getEmail());
            throw new FindBandValidationException("registration.email.already.exists");
        }

        boolean isBandOwner = useCase.getUserRoleEnum() == UserRoleEnum.BAND_OWNER;
        UserDomain userDomain = new UserDomain();
        userDomain.setEmail(useCase.getEmail());
        userDomain.setPassword(useCase.getPassword(), passwordEncoder, useCase.getConfirmationPassword());
        userDomain.setUsername(useCase.getUserName());
        userDomain.setUserRole(isBandOwner ? UserRole.BAND_OWNER : UserRole.BAND_SEEKER);
        userDomain.setInstruments(new HashSet<>(Arrays.asList(new Instrument(useCase.getInstrumentId()))));
        userDomain.setRegion(regionsPort.findById(useCase.getRegionId()));

        userPort.createUser(userDomain);

        return userDomain;
    }
}
