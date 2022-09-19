package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.exceptions.FindBandCommonException;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.services.StorageService;
import com.findBand.backend.domain.useCase.user.UserUploadAvatar;
import com.findBand.backend.infra.common.services.StorageException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.net.URISyntaxException;

@Component
@Slf4j
public class UserUploadAvatarCaseHandler  extends ObservableUseCasePublisher implements UseCaseHandler<String, UserUploadAvatar> {

    private UserPort userPort;
    private StorageService storageService;

    public UserUploadAvatarCaseHandler(UserPort userPort, StorageService storageService) {
        this.userPort = userPort;
        this.storageService = storageService;
        register(UserUploadAvatar.class, this);
    }

    @Override
    public Class<UserUploadAvatar> useCaseClass() {
        return UserUploadAvatar.class;
    }

    @Override
    public String handle(UserUploadAvatar useCase) {
        try {
            UserDomain userDomain = userPort.findUserByEmail(useCase.getEmail()).orElseThrow(() -> {
                log.error("User with such email: {} doesn't exist", useCase.getEmail());
                throw new FindBandCommonException();
            });
            String filename = storageService.store(useCase.getAvatarBase64(), "avatar", userDomain.getId());

            userPort.updateUserAvatar(filename, useCase.getEmail());
            userDomain.setAvatarFilename(filename);

            return userDomain.getAvatarUri();
        } catch (StorageException e) {
            log.error("Error in file storing", e);
            throw new FindBandCommonException();
        }
    }
}
