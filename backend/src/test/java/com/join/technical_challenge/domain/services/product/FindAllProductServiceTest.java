package com.join.technical_challenge.domain.services.product;

import com.join.technical_challenge.domain.models.product.Product;
import com.join.technical_challenge.domain.models.product.dtos.ProductResponseDTO;
import com.join.technical_challenge.repositories.ProductRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import java.util.List;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class FindAllProductServiceTest {

    @Mock
    private ProductRepository repository;

    @Mock
    private ProductMapperDTOService mapperDTOService;

    @InjectMocks
    private FindAllProductService service;

    @Test
    void shouldReturnPaginatedProducts() {
        // Arrange
        int page = 0;
        int items = 10;

        List<Product> mockProducts = List.of(
                new Product(1L, "Notebook", "Dell XPS 15","Eletronico", "www.teste.com", 500000, 5),
                new Product(2L, "Mouse", "Logitech MX","Eletronico", "www.teste.com", 25000, 10)
        );

        Page<Product> mockPage = new PageImpl<>(mockProducts);

        when(repository.findAll(PageRequest.of(page, items))).thenReturn(mockPage);
        when(mapperDTOService.toDTO(any(Product.class)))
                .thenAnswer(invocation -> {
                    Product product = invocation.getArgument(0);
                    return new ProductResponseDTO(
                            product.getId(),
                            product.getName(),
                            product.getDescription(),
                            product.getCategory(),
                            product.getImageUrl(),
                            product.getPrice(),
                            product.getAmount()
                    );
                });


        List<ProductResponseDTO> productsResponseDTO = service.execute(page, items);

        // Tests
        assertEquals(2, productsResponseDTO.size());
        assertEquals("Notebook", productsResponseDTO.get(0).name());
        assertEquals(25000, productsResponseDTO.get(1).price());


        verify(repository, times(1)).findAll(PageRequest.of(page, items));
        verify(mapperDTOService, times(2)).toDTO(any());
    }

    @Test
    void shouldReturnEmptyListWhenNoProductsExist() { // Testando o retorno de lista vazia

        when(repository.findAll(PageRequest.of(0, 10))).thenReturn(Page.empty());
        List<ProductResponseDTO> productsResponseDTO = service.execute(0, 10);

        // testes
        assertTrue(productsResponseDTO.isEmpty());
        verify(mapperDTOService, never()).toDTO(any());
    }

}