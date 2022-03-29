package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.ResetPassword;
import com.findBand.backend.domain.port.ResetPasswordPort;
import com.findBand.backend.infra.adapters.jpa.repository.ResetPasswordJpaRepository;
import com.findBand.backend.infra.adapters.jpa.repository.UserJpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Component
public class ResetPasswordJpaAdapter implements ResetPasswordPort {

	private ResetPasswordJpaRepository resetPasswordJpaRepository;
	private UserJpaRepository userJpaRepository;

	public ResetPasswordJpaAdapter(ResetPasswordJpaRepository resetPasswordJpaRepository, UserJpaRepository userJpaRepository) {
		this.resetPasswordJpaRepository = resetPasswordJpaRepository;
		this.userJpaRepository = userJpaRepository;
	}

	@Override
	public ResetPassword createResetPasswordRequest(ResetPassword resetPassword) {
		return resetPasswordJpaRepository.save(resetPassword);
	}

	@Override
	@Transactional
	public void createNewPassword(ResetPassword resetPassword) {
		resetPasswordJpaRepository.save(resetPassword);
		userJpaRepository.updatePassword(resetPassword.getUser().getPassword(), resetPassword.getUser().getId());
	}

	@Override
	public Optional<ResetPassword> findResetPasswordById(String resetPasswordId) {
		return resetPasswordJpaRepository.findById(resetPasswordId);
	}
}
