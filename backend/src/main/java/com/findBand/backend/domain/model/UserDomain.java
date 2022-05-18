package com.findBand.backend.domain.model;

import com.findBand.backend.domain.exceptions.FindBandValidationException;
import lombok.Data;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity(name = "user")
@Table(name = "findband_user")
public class UserDomain {

    private static final int PASSWORD_LENGTH = 6;
    private static final String REG_EMAIL = "^(.+)@(\\S+)$";
    private static final String REG_PHONE = "^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$";

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

    @Column
    private Integer age;

    @Column
    private Integer experienceAge;

    @Column(name = "avatar_filename")
    private String avatarFilename;

    @Column(name = "user_role")
    @Enumerated(EnumType.STRING)
    private UserRole userRole;

    @ManyToOne
    @JoinColumn(name = "region_id")
    private Region region;

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
        if (!email.matches(REG_EMAIL)) {
            throw new FindBandValidationException("registration.email.invalid");
        }
        this.email = email;
    }

    public void setPassword(String password, PasswordEncoder passwordEncoder, String confirmationPassword) {
        if (StringUtils.isEmpty(password)) {
            throw new FindBandValidationException("registration.password.empty");
        }
        if (password.length() < PASSWORD_LENGTH) {
            throw new FindBandValidationException("create.new.password.invalid");
        }
        if (!password.equals(confirmationPassword)) {
            throw new FindBandValidationException("create.new.password.invalid");
        }
        this.password = passwordEncoder.encode(password);
    }

    public void setPhone(String phone) {
        if (StringUtils.isEmpty(phone)) {
            throw new FindBandValidationException("registration.phone.empty");
        }
        if (!phone.matches(REG_PHONE)) {
            throw new FindBandValidationException("registration.phone.invalid");
        }
        this.phone = phone;
    }

    public void setUsername(String username) {
        if (StringUtils.isEmpty(username)) {
            throw new FindBandValidationException("registration.username.empty");
        }
        this.username = username;
    }

    public String getAvatarUri() throws URISyntaxException {
        //TODO: add default avatar
        if (StringUtils.isEmpty(avatarFilename)) {
            return "";
        }
        return "/uploads/" + id + "/" + avatarFilename;
    }

}
