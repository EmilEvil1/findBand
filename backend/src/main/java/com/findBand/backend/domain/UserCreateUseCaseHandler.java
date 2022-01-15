package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.model.UserRoleEnum;
import com.findBand.backend.domain.port.BandPort;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserCreate;
import com.findBand.backend.domain.exceptions.FindBandValidationException;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class UserCreateUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<UserDomain, UserCreate> {

    private UserPort userPort;
    private BandPort bandPort;

    public UserCreateUseCaseHandler(UserPort userPort, BandPort bandPort) {
        this.userPort = userPort;
        this.bandPort = bandPort;
        register(UserCreate.class, this);
    }

    @Override
    public UserDomain handle(UserCreate useCase) {
        if (StringUtils.isEmpty(useCase.getEmail())) {
            log.info("Email field is emplty");
            throw new FindBandValidationException("registration.email.empty");
        }

        if (StringUtils.isEmpty(useCase.getUserName())) {
            log.info("Username field is empty");
            throw new FindBandValidationException("registration.username.empty");
        }

        if (StringUtils.isEmpty(useCase.getPassword())) {
            log.info("Password field is empty");
            throw new FindBandValidationException("registration.password.empty");
        }

        if (userPort.doUserExists(useCase.getEmail())) {
            log.info("User with such email: {} already exists", useCase.getEmail());
            throw new FindBandValidationException("registration.email.already.exists");
        }

        UserDomain userDomain = userPort.createUser(useCase).orElseThrow(() -> new RuntimeException("User wasn't created"));

        boolean isBandOwner = useCase.getUserRoleEnum() == UserRoleEnum.BAND_OWNER;
        if (isBandOwner) {
            bandPort.createBand(useCase.getBandName(), userDomain.getId());
        }
        return userDomain;
    }
}
