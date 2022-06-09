package com.findBand.backend.domain;

import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.ResetPassword;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.port.MailerPort;
import com.findBand.backend.domain.port.ResetPasswordPort;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.domain.useCase.user.UserResetPassword;
import com.findBand.backend.infra.adapters.common.NoSuchUserException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriBuilder;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.InetAddress;
import java.util.UUID;

@Component
public class UserCreateResetPasswordUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<UserDomain, UserResetPassword> {

    @Value("email.from")
    private String EMAIL_FROM;

    private String HOST = InetAddress.getLoopbackAddress().getHostName();


    private final UserPort userPort;
    private final ResetPasswordPort resetPasswordPort;
    private final MailerPort mailerPort;

    public UserCreateResetPasswordUseCaseHandler(UserPort userPort, MailerPort mailerPort, ResetPasswordPort resetPasswordPort) {
        this.userPort = userPort;
        this.mailerPort = mailerPort;
        this.resetPasswordPort = resetPasswordPort;
        register(UserResetPassword.class, this);
    }

    @Override
    public UserDomain handle(UserResetPassword useCase) {
        UserDomain user = userPort.findUserByEmail(useCase.getEmailAddress()).orElseThrow(() -> new NoSuchUserException("authorization.email.not.exist"));
        ResetPassword resetPassword = new ResetPassword();
        resetPassword.setUser(user);
        resetPassword.setId(UUID.randomUUID().toString());
        resetPasswordPort.createResetPasswordRequest(resetPassword);
        final String resetPasswordLink = generateResetPasswordLink(resetPassword.getId());
        mailerPort.sendEmail(EMAIL_FROM, useCase.getEmailAddress(), resetPasswordLink);
        return user;
    }

    private String generateResetPasswordLink(String resetPasswordId) {
        UriBuilder uriBuilder = UriComponentsBuilder.newInstance();
        return uriBuilder.host(HOST)
          .scheme("http")
          .path("/reset").port(80)
          .queryParam("resetPasswordId", resetPasswordId)
          .build().toString();
    }
}
