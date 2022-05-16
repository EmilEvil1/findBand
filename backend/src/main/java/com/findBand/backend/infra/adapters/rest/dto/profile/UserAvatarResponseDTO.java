package com.findBand.backend.infra.adapters.rest.dto.profile;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class UserAvatarResponseDTO {
    private final String avatarUri;
}
