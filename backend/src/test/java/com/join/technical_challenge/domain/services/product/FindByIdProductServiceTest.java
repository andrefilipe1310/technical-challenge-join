package com.join.technical_challenge.domain.services.product;

import com.join.technical_challenge.domain.models.product.Product;
import com.join.technical_challenge.domain.models.product.dtos.ProductResponseDTO;
import com.join.technical_challenge.exceptions.ProductNotFoundException;
import com.join.technical_challenge.repositories.ProductRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class FindByIdProductServiceTest {

    @Mock
    private ProductRepository repository;

    @Mock
    private ProductMapperDTOService mapperDTOService;

    @InjectMocks
    private FindByIdProductService service;

    @Test
    void shouldReturnProductWhenIdExists() { // tem que voltar o produto caso ele exista

        Long productId = 1L;
        Product mockProduct = new Product(productId, "Notebook", "Dell XPS 15", "Eletronico", "www.teste.com", 500000, 10);
        ProductResponseDTO mockResponseDTO = new ProductResponseDTO(productId, "Notebook", "Dell XPS 15", "Eletronico", "www.teste.com", 500000, 10);

        // ajustando as condições
        when(repository.findById(productId)).thenReturn(Optional.of(mockProduct));
        when(mapperDTOService.toDTO(mockProduct)).thenReturn(mockResponseDTO);


        ProductResponseDTO productResponseDTO = service.execute(productId);

        // Testes
        assertNotNull(productResponseDTO);
        assertEquals(productId, productResponseDTO.id());
        assertEquals("Notebook", productResponseDTO.name());
        assertEquals(500000, productResponseDTO.price());

        // verificando quantidade de chamadas
        verify(repository, times(1)).findById(productId);
        verify(mapperDTOService, times(1)).toDTO(mockProduct);
    }

    @Test
    void shouldThrowProductNotFoundExceptionWhenIdDoesNotExist() {
        // Testando o not found de produtos
        Long id = 9L;

        when(repository.findById(id)).thenReturn(Optional.empty());
        assertThrows(ProductNotFoundException.class, () -> {
            service.execute(id);
        });

        // verificando quantidade de chamadas
        verify(repository, times(1)).findById(id);
        verify(mapperDTOService, never()).toDTO(any());
    }
}