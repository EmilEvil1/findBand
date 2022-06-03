package com.findBand.backend.infra.config;

import com.findBand.backend.infra.security.JwtAccessDeniedHandler;
import com.findBand.backend.infra.security.JwtAuthenticationEntryPoint;
import com.findBand.backend.infra.security.jwt.JWTConfigurer;
import com.findBand.backend.infra.security.jwt.TokenProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	private final TokenProvider tokenProvider;
	private final CorsFilter corsFilter;
	private final JwtAccessDeniedHandler jwtAccessDeniedHandler;
	private final JwtAuthenticationEntryPoint authenticationErrorHandler;

	public WebSecurityConfig(TokenProvider tokenProvider, CorsFilter corsFilter,
							 JwtAccessDeniedHandler jwtAccessDeniedHandler, JwtAuthenticationEntryPoint authenticationErrorHandler) {
		this.tokenProvider = tokenProvider;
		this.corsFilter = corsFilter;
		this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
		this.authenticationErrorHandler = authenticationErrorHandler;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring()
				.antMatchers(HttpMethod.OPTIONS, "/**")

				// allow anonymous resource requests
				.antMatchers(
						"/",
						"/*.html",
						"/favicon.ico",
						"/**/*.html",
						"/**/*.css",
						"/**/*.js",
						"/h2-console/**"
				);
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity
				// we don't need CSRF because our token is invulnerable
				.csrf().disable()

				.addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class)

				.exceptionHandling()
				.authenticationEntryPoint(authenticationErrorHandler)
				.accessDeniedHandler(jwtAccessDeniedHandler)

				// enable h2-console
				.and()
				.headers()
				.frameOptions()
				.sameOrigin()

				// create no session
				.and()
				.sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS)

				.and()
				.authorizeRequests()
				.antMatchers("/api/v1/authenticate").permitAll()
				.antMatchers("/api/v1/register").permitAll()
				.antMatchers("/api/v1/regions").permitAll()
				.antMatchers("/api/v1/instruments").permitAll()
				.antMatchers("/api/v1/resetPassword").permitAll()
				.antMatchers("/api/v1/validateResetPassword").permitAll()
				.antMatchers("/api/v1/createNewPassword").permitAll()
				.antMatchers("/uploads/**").permitAll()
				.antMatchers("/v3/api-docs/**").permitAll()

				// .antMatchers("/api/activate").permitAll()
				// .antMatchers("/api/account/reset-password/init").permitAll()
				// .antMatchers("/api/account/reset-password/finish").permitAll()


//          .antMatchers("/api/person").hasAuthority("ROLE_USER")
//          .antMatchers("/api/hiddenmessage").hasAuthority("ROLE_ADMIN")

				.anyRequest().authenticated()

				.and()
				.apply(securityConfigurerAdapter());
	}

	private JWTConfigurer securityConfigurerAdapter() {
		return new JWTConfigurer(tokenProvider);
	}

}
