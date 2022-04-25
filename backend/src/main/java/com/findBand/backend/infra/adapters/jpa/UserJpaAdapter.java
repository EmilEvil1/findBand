package com.findBand.backend.infra.adapters.jpa;

import com.findBand.backend.domain.model.Instrument;
import com.findBand.backend.domain.model.UserDomain;
import com.findBand.backend.domain.port.UserPort;
import com.findBand.backend.infra.adapters.jpa.repository.UserJpaRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Component
@Slf4j
public class UserJpaAdapter implements UserPort {

    private UserJpaRepository userJpaRepository;

    public UserJpaAdapter(UserJpaRepository userJpaRepository) {
        this.userJpaRepository = userJpaRepository;
    }

    @Override
    public Optional<UserDomain> findUserByEmail(String email) {
        return userJpaRepository.findByEmail(email);
    }

    @Override
    public boolean doUserExists(String emailAddress) {
        return userJpaRepository.existsByEmail(emailAddress);
    }

    @Override
    public UserDomain createUser(UserDomain userDomain) {
        return userJpaRepository.save(userDomain);
    }

    @Override
    public List<UserDomain> findByInstrumentsIdsAndRegionId(Set<Long> instrumentsIds, long regionId) {
        return userJpaRepository.findByInstrumentIdsAndRegionId(instrumentsIds, regionId);
    }

    @Override
    public Optional<UserDomain> findUserById(long id) {
        return userJpaRepository.findById(id);
    }

    @Override
    public UserDomain updateUser(UserDomain userDomain) {
        return userJpaRepository.save(userDomain);
    }
}
