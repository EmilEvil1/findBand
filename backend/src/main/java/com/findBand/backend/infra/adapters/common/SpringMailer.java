package com.findBand.backend.infra.adapters.common;

import com.findBand.backend.domain.port.MailerPort;
import org.springframework.stereotype.Component;

@Component
public class SpringMailer implements MailerPort {
    @Override
    public void sendEmail(String fromEmailAddress, String toEmailAddress, String body) {

    }
}
