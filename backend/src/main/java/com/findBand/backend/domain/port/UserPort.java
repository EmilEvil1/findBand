package com.findBand.backend.domain.port;

import com.findBand.backend.domain.model.UserDomain;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserPort {
    Optional<UserDomain> findUserByEmail(String email);

    Optional<UserDomain> findUserById(long id);

    boolean doUserExists(String emailAddress);

    UserDomain createUser(UserDomain userDomain);

    UserDomain updateUser(UserDomain userDomain);

    List<UserDomain> findByInstrumentsIdsAndRegionId(Set<Long> instrumentsIds, long regionId);
}
