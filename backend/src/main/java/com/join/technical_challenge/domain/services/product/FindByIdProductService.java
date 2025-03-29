package com.join.technical_challenge.domain.services.product;


import com.join.technical_challenge.domain.models.product.Product;
import com.join.technical_challenge.domain.models.product.dtos.ProductResponseDTO;
import com.join.technical_challenge.exceptions.ProductNotFoundException;
import com.join.technical_challenge.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FindByIdProductService {
    @Autowired
    private ProductRepository repository;
    @Autowired
    private ProductMapperDTOService mapperDTOService;

    public ProductResponseDTO execute(Long id) {
        Product product = repository.findById(id).orElseThrow(
                ()->{
                    return new ProductNotFoundException();
                }
        );

        return mapperDTOService.toDTO(product);
    }
}
