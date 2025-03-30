package com.join.technical_challenge.domain.services.product;


import com.join.technical_challenge.domain.models.product.Product;
import com.join.technical_challenge.domain.models.product.dtos.ProductRequestDTO;
import com.join.technical_challenge.domain.models.product.dtos.ProductResponseDTO;
import org.springframework.stereotype.Service;

@Service
public class ProductMapperDTOService {


    public ProductResponseDTO toDTO(Product product){
        return new ProductResponseDTO(
                product.getId(),
                product.getName(),
                product.getDescription(),
                product.getCategory(),
                product.getImageUrl(),
                product.getPrice(),
                product.getAmount()
        );
    }


    public Product toEntity(ProductRequestDTO requestDTO) {
        Product product = new Product();
        product.setName(requestDTO.name());
        product.setDescription(requestDTO.description());
        product.setCategory(requestDTO.category());
        product.setImageUrl(requestDTO.imageUrl());
        product.setPrice(requestDTO.price());
        product.setAmount(requestDTO.amount());
        return product;
    }
}
