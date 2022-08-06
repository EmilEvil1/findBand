package com.findBand.backend.infra.security.rest;

import com.findBand.backend.domain.common.useCase.UseCasePublisher;
import com.findBand.backend.domain.exceptions.FindBandValidationException;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.model.UserRoleEnum;
import com.findBand.backend.domain.useCase.user.UserCreate;
import com.findBand.backend.infra.common.rest.BaseController;
import com.findBand.backend.infra.common.rest.Response;
import com.findBand.backend.infra.security.jwt.JWTFilter;
import com.findBand.backend.infra.security.jwt.TokenProvider;
import com.findBand.backend.infra.security.rest.dto.LoginDTO;
import com.findBand.backend.infra.security.rest.dto.RegisterDTO;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;

@RestController
@RequestMapping("/api/v1")
public class AuthenticationRestController extends BaseController {

    private final TokenProvider tokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    private final UseCasePublisher useCasePublisher;

    public AuthenticationRestController(TokenProvider tokenProvider,
                                        AuthenticationManagerBuilder authenticationManagerBuilder,
                                        UseCasePublisher useCasePublisher) {
        this.tokenProvider = tokenProvider;
        this.authenticationManagerBuilder = authenticationManagerBuilder;
        this.useCasePublisher = useCasePublisher;
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public Response<JWTToken> register(@RequestBody RegisterDTO registerDTO) {
        UserCreate userCreate = new UserCreate();
        userCreate.setUserName(registerDTO.getUsername());
        userCreate.setEmail(registerDTO.getEmail());
        userCreate.setPassword(registerDTO.getPassword());
        userCreate.setConfirmationPassword(registerDTO.getConfirmationPassword());
        userCreate.setUserRoleEnum(UserRoleEnum.BAND_SEEKER);
        userCreate.setInstrumentId(registerDTO.getInstrumentId());
        userCreate.setRegionId(registerDTO.getRegionId());
        UserDomain createdUser = useCasePublisher.publish(UserDomain.class, userCreate);

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                registerDTO.getEmail(),
                registerDTO.getPassword(),
                Collections.singleton(new SimpleGrantedAuthority(createdUser.getUserRole().toString())));
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);

        String jwt = tokenProvider.createToken(authenticationToken, true);

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JWTFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

        return respond(new JWTToken(jwt));
    }

    @PostMapping("/authenticate")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<JWTToken> authorize(@RequestBody LoginDTO loginDTO) {
        UsernamePasswordAuthenticationToken authenticationToken =
          new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword());

        try {
            Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

            SecurityContextHolder.getContext().setAuthentication(authentication);

            String jwt = tokenProvider.createToken(authentication, true);

            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.add(JWTFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

            return new ResponseEntity<JWTToken>(new JWTToken(jwt), httpHeaders, HttpStatus.OK);
        } catch (AuthenticationException e) {
            throw new FindBandValidationException("authorization.email.or.password.wrong");
        }
    }

    static class JWTToken {
        public JWTToken(String token) {
            this.token = token;
        }

        private String token;

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }
    }

}
