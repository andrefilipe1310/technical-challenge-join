package com.join.technical_challenge.domain.models.product.dtos;

public record ProductUpdateDTO(
        String name,
        String description,
        String category,
        String imageUrl,
        long price,
        int amount
) {
}
