package com.findBand.backend.infra.common.util;

import org.apache.commons.lang3.StringUtils;

import java.util.Base64;
import java.util.regex.Pattern;

public class ImageUtil {

    private final static Pattern REG_BASE_64_IMAGE = Pattern.compile("data:image/(png|jpg|jpeg);base64");


    public static byte[] convertImageBase64ToBytes(String base64Image) {
        if (StringUtils.isEmpty(base64Image) || !REG_BASE_64_IMAGE.matcher(base64Image).find()) {
            throw new IllegalArgumentException("Inappropriate base64 format");
        }

        String[] base64ImageParts = base64Image.split(",");
        if (base64ImageParts.length <= 1) {
            throw new IllegalArgumentException("Inappropriate base64 format");
        }

        String encodedPart = base64ImageParts[1];
        return Base64.getMimeDecoder().decode(encodedPart);
    }

    public static String resolveImageExtension(String base64) {
        if (base64.contains("jpg")) {
            return "jpg";
        } else if (base64.contains("png")) {
            return "png";
        } else {
            return "jpg";
        }
    }
}
