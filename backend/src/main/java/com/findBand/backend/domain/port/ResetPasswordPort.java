package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.ResetPassword;

import java.util.Optional;

public interface ResetPasswordPort {
	ResetPassword createResetPasswordRequest(ResetPassword resetPassword);

	void createNewPassword(ResetPassword resetPassword);

	Optional<ResetPassword> findResetPasswordById(String resetPasswordId);

}
