package com.join.technical_challenge.domain.services.product;

import com.join.technical_challenge.exceptions.ProductNotFoundException;
import com.join.technical_challenge.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeleteByIdProductService {
    @Autowired
    private ProductRepository repository;

    public void execute(Long id){
        if(!repository.existsById(id)) {
            throw new ProductNotFoundException();
        }
        this.repository.deleteById(id);
    }
}
