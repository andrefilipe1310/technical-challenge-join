package com.join.technical_challenge.domain.models.product;

import com.join.technical_challenge.domain.models.product.dtos.ProductUpdateDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity(name = "tb_product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;

    public Product() {
    }
    public Product(Long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    public void update(ProductUpdateDTO updateDTO){
        if (updateDTO.name() != null && !updateDTO.name().equals(this.name)){
            this.name = updateDTO.name();
        }
        if(updateDTO.description() != null && !updateDTO.description().equals(this.description)){
            this.description = description;
        }
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public Long getId() {
        return id;
    }



}
