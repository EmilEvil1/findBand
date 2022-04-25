package com.findBand.backend.infra.adapters.rest.dto.user;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UserProfileResponseDTO {
    private String userName;
    private String emailAddress;
    private String phone;
    private Integer experienceAge;
    private Integer age;
}
