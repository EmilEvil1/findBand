package com.findBand.backend.domain;

import com.findBand.backend.domain.common.exception.FindBandValidationException;
import com.findBand.backend.domain.common.useCase.ObservableUseCasePublisher;
import com.findBand.backend.domain.common.useCase.UseCaseHandler;
import com.findBand.backend.domain.model.BandSeeker;
import com.findBand.backend.domain.port.BandSeekerPort;
import com.findBand.backend.domain.useCase.BandSeekerCreate;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;

@Slf4j
public class BandSeekerCreateUseCaseHandler extends ObservableUseCasePublisher implements UseCaseHandler<BandSeeker, BandSeekerCreate> {

    private BandSeekerPort bandSeekerPort;

    public BandSeekerCreateUseCaseHandler(BandSeekerPort bandSeekerPort) {
        register(BandSeekerCreate.class, this);
        this.bandSeekerPort = bandSeekerPort;
    }

    @Override
    public BandSeeker handle(BandSeekerCreate useCase) {
        if (StringUtils.isEmpty(useCase.getEmail())) {
            throw new FindBandValidationException("email");
        }
        if (StringUtils.isEmpty(useCase.getName())) {
            throw new FindBandValidationException("name");
        }
        if (StringUtils.isEmpty(useCase.getPhone())) {
            throw new FindBandValidationException("phone");
        }
        return bandSeekerPort.create(useCase);
    }
}
