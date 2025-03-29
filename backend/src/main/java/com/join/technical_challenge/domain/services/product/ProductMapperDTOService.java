package com.join.technical_challenge.domain.services.product;


import com.join.technical_challenge.domain.models.product.Product;
import com.join.technical_challenge.domain.models.product.dtos.ProductRequestDTO;
import com.join.technical_challenge.domain.models.product.dtos.ProductResponseDTO;
import org.springframework.stereotype.Service;

@Service
public class ProductMapperDTOService {


    public ProductResponseDTO toDTO(Product product){
        return new ProductResponseDTO(
                product.getName(),
                product.getDescription()
        );
    }


    public Product toEntity(ProductRequestDTO requestDTO) {
        Product product = new Product();
        product.setName(requestDTO.name());
        product.setDescription(requestDTO.description());

        return product;
    }
}
