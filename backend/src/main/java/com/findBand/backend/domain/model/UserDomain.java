package com.findBand.backend.domain.model;

import com.findBand.backend.domain.exceptions.FindBandValidationException;
import lombok.Data;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity(name = "user")
@Table(name = "findband_user")
public class UserDomain {

    private static final int PASSWORD_LENGTH = 8;

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

    @Column(name = "user_role")
    @Enumerated(EnumType.STRING)
    private UserRole userRole;

    @ManyToMany
    @JoinTable(
      name = "users_instruments",
      joinColumns = @JoinColumn(name = "user_id"),
      inverseJoinColumns = @JoinColumn(name = "instrument_id"))
    private Set<Instrument> instruments = new HashSet<>();

    @Transient
    private boolean isActivated = true;

    public void setEmail(String email) {
        if (StringUtils.isEmpty(email)) {
            throw new FindBandValidationException("registration.email.already.exists");
        }
        this.email = email;
    }

    public void setPassword(String password, PasswordEncoder passwordEncoder) {
        if (StringUtils.isEmpty(password)) {
            throw new FindBandValidationException("registration.password.empty");
        }
        if (password.length() < PASSWORD_LENGTH) {
            throw new FindBandValidationException("create.new.password.invalid");
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
