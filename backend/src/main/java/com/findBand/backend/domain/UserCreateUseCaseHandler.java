package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.*;
import com.findBand.backend.domain.port.BandOwnerPort;
import com.findBand.backend.domain.port.BandPort;
import com.findBand.backend.domain.port.BandSeekerPort;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserCreate;
import com.findBand.backend.domain.exceptions.FindBandValidationException;
import com.findBand.backend.infra.adapters.jpa.entity.BandEntity;
import com.findBand.backend.infra.adapters.jpa.entity.BandOwnerEntity;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class UserCreateUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<UserDomain, UserCreate> {

    private UserPort userPort;
    private BandPort bandPort;
    private BandSeekerPort bandSeekerPort;
    private BandOwnerPort bandOwnerPort;

    public UserCreateUseCaseHandler(BandSeekerPort bandSeekerPort, BandPort bandPort, BandOwnerPort bandOwnerPort) {
        this.bandSeekerPort = bandSeekerPort;
        this.bandPort = bandPort;
        this.bandOwnerPort = bandOwnerPort;
        register(UserCreate.class, this);
    }

    @Override
    public UserDomain handle(UserCreate useCase) {
        UserDomain user = new UserDomain();
        user.setEmail(useCase.getEmail());

        boolean isBandOwner = useCase.getUserRoleEnum() == UserRoleEnum.BAND_OWNER;
        UserDomain userDomain;

        //TODO: refactore to using factory
        if (isBandOwner) {
            BandOwner bandOwner = new BandOwner();
            bandOwner.setEmail(useCase.getEmail());
            bandOwner.setPassword(useCase.getPassword());
            bandOwner.setUsername(useCase.getUserName());
            userDomain = bandOwnerPort.createBandOwner(bandOwner);

            Band newBand = new Band();
            newBand.setName(useCase.getBandName());

            newBand.setBandOwner(bandOwner);
            bandPort.createBand(newBand);
        } else {
            BandSeeker bandSeeker = new BandSeeker();
            bandSeeker.setEmail(useCase.getEmail());
            bandSeeker.setPassword(useCase.getPassword());
            bandSeeker.setUsername(useCase.getUserName());
            userDomain = bandSeekerPort.createBandSeeker(bandSeeker);
        }

        return userDomain;
    }
}
