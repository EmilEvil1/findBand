package com.findBand.backend.infra.common.rest;

import java.util.List;
import java.util.Objects;

public class DataResponse<T> {

    private List<T> items = List.of();
    private Integer page;
    private Integer size;
    private int totalSize;

    public DataResponse() {
    }

    public DataResponse(List<T> items) {
        this.items = items;
    }

    public DataResponse(List<T> items, Integer page, Integer size, int totalSize) {
        this.items = items;
        this.page = page;
        this.size = size;
        this.totalSize = totalSize;
    }

    public List<T> getItems() {
        return items;
    }

    public Integer getPage() {
        return page;
    }

    public Integer getSize() {
        return Objects.nonNull(size) ? size : items.size();
    }

    public int getTotalSize() {
        return totalSize;
    }

}