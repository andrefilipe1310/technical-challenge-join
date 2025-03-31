package com.join.technical_challenge.controllers;

import com.join.technical_challenge.domain.models.product.dtos.ProductRequestDTO;
import com.join.technical_challenge.domain.models.product.dtos.ProductResponseDTO;
import com.join.technical_challenge.domain.models.product.dtos.ProductUpdateDTO;
import com.join.technical_challenge.domain.services.product.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private CreateProductService createProductService;
    @Autowired
    private FindByIdProductService findByIdProductService;
    @Autowired
    private FindAllProductService findAllProductService;
    @Autowired
    private UpdateProductService updateProductService;
    @Autowired
    private DeleteByIdProductService deleteByIdProductService;

    @PostMapping
    public ResponseEntity<ProductResponseDTO> create(@RequestBody ProductRequestDTO requestDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(createProductService.execute(requestDTO));
    }
    @GetMapping
    public ResponseEntity<List<ProductResponseDTO>> findAll(@RequestParam int pages,@RequestParam int items){
        return ResponseEntity.status(HttpStatus.OK).body(findAllProductService.execute(pages,items));
    }
    @GetMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> findById(@PathVariable("id") Long id){
        return ResponseEntity.status(HttpStatus.OK).body(findByIdProductService.execute(id));
    }
    @PutMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> update(@PathVariable("id") Long id, @RequestBody ProductUpdateDTO updateDTO){
        return ResponseEntity.status(HttpStatus.OK).body(updateProductService.execute(updateDTO,id));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable("id") Long id){
        deleteByIdProductService.execute(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }



}
