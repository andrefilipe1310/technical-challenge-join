package com.join.technical_challenge.domain.services.product;

import com.join.technical_challenge.domain.models.product.Product;
import com.join.technical_challenge.domain.models.product.dtos.ProductRequestDTO;
import com.join.technical_challenge.domain.models.product.dtos.ProductResponseDTO;
import com.join.technical_challenge.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CreateProductService {

    @Autowired
    private ProductRepository repository;
    @Autowired
    private ProductMapperDTOService mapperDTOService;


    public ProductResponseDTO execute(ProductRequestDTO requestDTO){
        Product product = mapperDTOService.toEntity(requestDTO);
        return mapperDTOService.toDTO(repository.save(product));
    }
}
