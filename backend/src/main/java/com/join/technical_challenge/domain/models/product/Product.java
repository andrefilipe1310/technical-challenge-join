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
    private String category;
    private String imageUrl;
    private long price;
    private int amount;

    public Product() {
    }

    public Product(Long id,String name, String description, String category, String imageUrl, long price, int amount) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.imageUrl = imageUrl;
        this.price = price;
        this.amount = amount;
    }

    public void update(ProductUpdateDTO updateDTO){
        if (updateDTO.name() != null && !updateDTO.name().equals(this.name)){
            this.name = updateDTO.name();
        }
        if(updateDTO.description() != null && !updateDTO.description().equals(this.description)){
            this.description = description;
        }
        if(updateDTO.category() != null && !updateDTO.category().equals(this.category)){
            this.category = category;
        }
        if(updateDTO.imageUrl() != null && !updateDTO.imageUrl().equals(this.imageUrl)){
            this.imageUrl = imageUrl;
        }
        if(updateDTO.price() > 0 && updateDTO.price() != this.price){
            this.price = price;
        }
        if(updateDTO.amount() >= 0 && updateDTO.amount() != this.amount){
            this.amount = amount;
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

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
