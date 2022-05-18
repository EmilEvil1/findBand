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
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
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
    public String handle(UserUploadAvatar useCase) {
        MultipartFile file = useCase.getFile();
        try {
            UserDomain userDomain = userPort.findUserByEmail(useCase.getEmail()).orElseThrow(FindBandCommonException::new);
            String filename = storageService.store(file, userDomain.getId());

            userPort.updateUserAvatar(filename, useCase.getEmail());

            return userDomain.getAvatarUri();
        } catch (StorageException | URISyntaxException e) {
            log.error("Error in file storing for filename: {}", file.getName(), e);
            throw new FindBandCommonException();
        }
    }
}
