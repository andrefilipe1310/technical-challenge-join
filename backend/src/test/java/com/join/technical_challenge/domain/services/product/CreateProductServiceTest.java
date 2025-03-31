package com.join.technical_challenge.domain.services.product;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.join.technical_challenge.domain.models.product.Product;
import com.join.technical_challenge.domain.models.product.dtos.ProductRequestDTO;
import com.join.technical_challenge.domain.models.product.dtos.ProductResponseDTO;
import com.join.technical_challenge.repositories.ProductRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class CreateProductServiceTest {

    @Mock
    private ProductRepository repository;

    @Mock
    private ProductMapperDTOService mapperDTOService;

    @InjectMocks
    private CreateProductService service;

    @Test
    void shouldCreateProductSuccessfully() { //criação de produto com sucesso

        ProductRequestDTO requestDTO = new ProductRequestDTO(
                "Notebook",
                "Dell XPS 15",
                "Eletronico",
                "www.teste.com",
                500000, // R$ 5.000,00 em centavos
                10
        );

        Product mockProduct = new Product(1L, "Notebook", "Dell XPS 15", "Eletronico", "www.teste.com", 500000, 10);
        ProductResponseDTO mockResponseDTO = new ProductResponseDTO(1L, "Notebook", "Dell XPS 15","Eletronico", "www.teste.com", 500000, 10);

        // ajustando as condições
        when(mapperDTOService.toEntity(requestDTO)).thenReturn(mockProduct);
        when(repository.save(mockProduct)).thenReturn(mockProduct);
        when(mapperDTOService.toDTO(mockProduct)).thenReturn(mockResponseDTO);


        ProductResponseDTO productResponseDTO = service.execute(requestDTO);

        // testes
        assertNotNull(productResponseDTO);
        assertEquals(1L, productResponseDTO.id());
        assertEquals("Notebook", productResponseDTO.name());
        assertEquals("Eletronico", productResponseDTO.category());
        assertEquals("www.teste.com", productResponseDTO.imageUrl());
        assertEquals(500000, productResponseDTO.price());
        assertEquals(10, productResponseDTO.amount());

        // verificando quantidade de chamadas
        verify(mapperDTOService, times(1)).toEntity(requestDTO);
        verify(repository, times(1)).save(mockProduct);
        verify(mapperDTOService, times(1)).toDTO(mockProduct);
    }

    @Test
    void shouldThrowExceptionWhenMapperFails() {
        //lança a excessão IllegalArgumentException quando o mapeador façar

        ProductRequestDTO requestDTO = new ProductRequestDTO(
                "Notebook",
                null, // Descrição nula para forçar erro
                "Eletronico",
                "www.teste.com",
                500000,
                10
        );

        when(mapperDTOService.toEntity(requestDTO))
                .thenThrow(new IllegalArgumentException());


        assertThrows(IllegalArgumentException.class, () -> {
            service.execute(requestDTO);
        });

        verify(repository, never()).save(any());
        verify(mapperDTOService, never()).toDTO(any());
    }
}