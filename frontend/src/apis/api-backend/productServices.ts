import { api } from "../../infra/axios/axiosInstance";
import { ProductRequestDTO, ProductResponseDTO, ProductUpdateDTO } from "../../types/productTypes";






export const createProduct = async (productRequestDTO: ProductRequestDTO): Promise<ProductResponseDTO | null> => {
    try {
        const response = await api.post('/product', productRequestDTO)
        console.log("Produto criado: ", response.data)
        return response.data as ProductResponseDTO
    } catch (error) {
        console.log("Erro ao criar produto: ", error)
        return null
    }
};

export const findByIdProduct = async (id:number): Promise<ProductResponseDTO | null> => {
    try {
        const response = await api.get(`/product/${id}`)
        console.log("Produto buscado: ", response.data)
        return response.data as ProductResponseDTO
    } catch (error) {
        console.log(`Erro ao buscar produto id = ${id}: `, error)
        return null
    }
}

export const findAllProduct = async ({page,items}:{page:number;items:number}): Promise<ProductResponseDTO[] | null> => {
    try {
        const response = await api.get(`/product?pages=${page}&items=${items}`)
        console.log("Produtos: ", response.data)
        return response.data as ProductResponseDTO[]
    } catch (error) {
        console.log(`Erro ao buscar produtos: `, error)
        return null
    }
}

export const updateProduct = async (id:number, productUpdateDTO:ProductUpdateDTO): Promise<ProductResponseDTO | null> => {
    try {
        const response = await api.put(`/product/${id}`,productUpdateDTO)
        console.log("Produto atualizado: ", response.data)
        return response.data as ProductResponseDTO
    } catch (error) {
        console.log(`Erro ao atualizar produto id = ${id}: `, error)
        return null
    }
}


export const deleteByIdProduct = async (id:number): Promise<void> => {
    try {
        await api.delete(`/product/${id}`)
    } catch (error) {
        console.log(`Erro ao deletar produto id = ${id}: `, error)
    }
}