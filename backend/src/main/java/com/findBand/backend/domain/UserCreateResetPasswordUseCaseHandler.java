package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.port.MailerPort;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserResetPassword;
import com.findBand.backend.infra.adapters.common.NoSuchUserException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriBuilder;
import org.springframework.web.util.UriComponentsBuilder;

@Component
public class UserCreateResetPasswordUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<UserDomain, UserResetPassword> {

    @Value("email.from")
    private String EMAIL_FROM;

    @Value("environment.host")
    private String HOST;

    private final UserPort userPort;
    private final MailerPort mailerPort;

    public UserCreateResetPasswordUseCaseHandler(UserPort userPort, MailerPort mailerPort) {
        this.userPort = userPort;
        this.mailerPort = mailerPort;
        register(UserResetPassword.class, this);
    }

    @Override
    public UserDomain handle(UserResetPassword useCase) {
        UserDomain user = userPort.findUserByEmail(useCase.getEmailAddress()).orElseThrow(NoSuchUserException::new);
        final String resetPasswordId = userPort.createResetPasswordRequest(user.getId());
        final String resetPasswordLink = generateResetPasswordLink(resetPasswordId);
        mailerPort.sendEmail(EMAIL_FROM, useCase.getEmailAddress(), resetPasswordLink);
        return user;
    }

    private String generateResetPasswordLink(String resetPasswordId) {
        UriBuilder uriBuilder = UriComponentsBuilder.newInstance();
        return uriBuilder.host(HOST).path("/reset").port(80)
          .queryParam("resetPasswordId", resetPasswordId)
          .build().toString();
    }
}
