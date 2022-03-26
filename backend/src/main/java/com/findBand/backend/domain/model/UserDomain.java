package com.findBand.backend.domain.model;

import com.findBand.backend.domain.exceptions.FindBandValidationException;
import lombok.Data;
import org.apache.commons.lang3.StringUtils;
import org.springframework.context.annotation.Scope;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Data
@Entity(name = "user")
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_role")
@Table(name = "findband_user")
@Component
@Scope("prototype")
public class UserDomain {

    private PasswordEncoder passwordEncoder;

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private String username;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String phone;

    public void setEmail(String email) {
        if (StringUtils.isEmpty(email)) {
            throw new FindBandValidationException("registration.email.already.exists");
        }
        this.email = email;
    }

    public void setPassword(String password) {
        if (StringUtils.isEmpty(password)) {
            throw new FindBandValidationException("registration.password.empty");
        }
        this.password = passwordEncoder.encode(password);
    }

    public void setUsername(String username) {
        if (StringUtils.isEmpty(username)) {
            throw new FindBandValidationException("registration.username.empty");
        }
        this.username = username;
    }

}
