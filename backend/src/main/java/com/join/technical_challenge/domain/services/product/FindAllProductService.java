package com.join.technical_challenge.domain.services.product;

import com.join.technical_challenge.domain.models.product.dtos.ProductResponseDTO;
import com.join.technical_challenge.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FindAllProductService {
    @Autowired
    private ProductRepository repository;
    @Autowired
    private ProductMapperDTOService mapperDTOService;

    public List<ProductResponseDTO> execute(int pages, int items) {
        return repository.findAll(PageRequest.of(pages, items)).stream().map(product -> {
            return mapperDTOService.toDTO(product);
        }).collect(Collectors.toList());
    }
}
