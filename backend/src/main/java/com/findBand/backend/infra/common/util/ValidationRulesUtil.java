package com.findBand.backend.infra.common.util;

public class ValidationRulesUtil {

    private static final int PASSWORD_LENGTH = 8;

    public static boolean validatePassword(final String password) {
        if (password.length() < PASSWORD_LENGTH) {
            return false;
        }
        return true;
    }

}
