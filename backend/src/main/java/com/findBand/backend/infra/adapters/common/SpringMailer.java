package com.findBand.backend.infra.adapters.common;

import com.findBand.backend.domain.port.MailerPort;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.internet.MimeMessage;

@Component
@Slf4j
public class SpringMailer implements MailerPort {

    private JavaMailSender mailSender;

    public SpringMailer(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendEmail(String fromEmailAddress, String toEmailAddress, String subject, String body) {
       try {
           MimeMessage mimeMessage = mailSender.createMimeMessage();
           MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
           mimeMessageHelper.setSubject(subject);
           mimeMessageHelper.setTo(toEmailAddress);
           mimeMessageHelper.setFrom(fromEmailAddress);
           mimeMessageHelper.setText(body);

           mailSender.send(mimeMessage);
       } catch (Exception e) {
           log.error("Error in sending message from: {}, to: {}", fromEmailAddress, toEmailAddress, e);
       }
    }
}
