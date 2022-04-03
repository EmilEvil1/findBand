package com.findBand.backend.infra.security;

import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.infra.adapters.common.NoSuchUserException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

/**
 * Authenticate a user from the database.
 */
@Component("userDetailsService")
@Slf4j
public class UserModelDetailsService implements UserDetailsService {

   private final UserPort daoUserPort;

   public UserModelDetailsService(UserPort daoUserPort) {
      this.daoUserPort = daoUserPort;
   }

   @Override
   @Transactional
   public UserDetails loadUserByUsername(final String login) {
      log.debug("Authenticating user '{}'", login);

      return daoUserPort.findUserByEmail(login)
        .map(user -> createSpringSecurityUser(login, user))
        .orElseThrow(() -> new NoSuchUserException("authorization.email.not.exist"));

   }

   private org.springframework.security.core.userdetails.User createSpringSecurityUser(String lowercaseLogin, UserDomain user) {
      if (!user.isActivated()) {
         throw new UserNotActivatedException("User " + lowercaseLogin + " was not activated");
      }
      List<GrantedAuthority> grantedAuthorities = Arrays.asList(new SimpleGrantedAuthority(user.getUserRole().toString()));
      return new org.springframework.security.core.userdetails.User(user.getEmail(),
         user.getPassword(),
         grantedAuthorities);
   }
}
