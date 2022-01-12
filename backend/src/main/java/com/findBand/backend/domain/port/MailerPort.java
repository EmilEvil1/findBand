package com.findBand.backend.domain.port;

public interface MailerPort {
    void sendEmail(String fromEmailAddress, String toEmailAddress, String body);
}
