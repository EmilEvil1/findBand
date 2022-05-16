package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.exceptions.FindBandCommonException;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserUploadAvatar;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

@Component
@Slf4j
public class UserUploadAvatarCaseHandler  extends ObservableUseCasePublisher implements UseCaseHandler<String, UserUploadAvatar> {

    private UserPort userPort;

    public UserUploadAvatarCaseHandler() {
        register(UserUploadAvatar.class, this);
    }

    @Override
    public String handle(UserUploadAvatar useCase) {
        MultipartFile file = useCase.getFile();
        String fileName = file.getOriginalFilename();
        String pathName = "~/uploads/" + fileName;
        try {
            file.transferTo(new File(pathName));
        } catch (IOException e) {
            throw new FindBandCommonException();
        }

        userPort.updateUserAvatar(pathName, useCase.getEmail());
        try {
            URI uri = new URI("http", "findband.ru", pathName, null);
            return uri.toString();
        } catch (URISyntaxException e) {
            throw new FindBandCommonException();
        }
    }
}
