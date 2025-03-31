import { useEffect, useState } from 'react';
import CardSection from '../../components/card-section/CardSection';
import { ProductResponseDTO } from '../../types/productTypes';
import './EditProduct.css';
import {  Save } from 'lucide-react';
import { findByIdProduct, updateProduct } from '../../apis/api-backend/productServices';
import { useParams } from 'react-router-dom';

function EditProduct() {
    let {idParams} = useParams()
    let id = Number(idParams)
    const [product, setProduct] = useState<ProductResponseDTO | null>(null);

    useEffect(() => {
        const handleFindByIdProduct = async (id: number) => {
            const response = await findByIdProduct(id)
            if (response) {
                setProduct(response)
            }
        }
        handleFindByIdProduct(id)
    }, [id])

    const handleUpdateProduct = async(product:ProductResponseDTO) => {
        try {
            const response = await updateProduct(product.id,product)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
       
      
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setProduct((prevData) => (prevData ? { ...prevData, [name]: value } : prevData))
    };
    
    if (!product) {
        return <p>Produto não encontrado</p>
    }

    return (
        <div className='main'>
            <h1>{product.name}</h1>
            <CardSection>
                <h2>Informações básicas</h2>
                <label htmlFor="product-name">Nome do Produto </label>
                <input
                    id="product-name"
                    name="name"
                    value={product?.name || ""}
                    onChange={handleInputChange}
                    placeholder="EX: Abacaxi, Melão"
                    type="text"
                />
                <label>Categoria </label>
                <select id="product-category" name="category" onChange={handleInputChange} value={product?.category || ""}>
                    <option value="Roupa">Roupa</option>
                    <option value="Eletronico">Eletrônico</option>
                    <option value="Outros">Outros</option>
                </select>
                <label>Descrição </label>
                <textarea
                    id="product-description"
                    name="description"
                    onChange={handleInputChange}
                    value={product?.description || ""}
                ></textarea>
                
                <h2>Preço e Estoque</h2>
                <label>Preço </label>
                <input
                    id="product-price"
                    name="price"
                    value={product?.price || ""}
                    onChange={handleInputChange}
                    placeholder="Ex: 20,00"
                    type="number"
                />
                <label>Estoque </label>
                <input
                    id="product-amount"
                    name="amount"
                    value={product?.amount || ""}
                    onChange={handleInputChange}
                    placeholder="Ex: 50"
                    type="number"
                />
                <div className="buttons">
                    <button className="button save" onClick={()=>handleUpdateProduct(product)}>
                        <Save color="#fff" /> Salvar
                    </button>
                </div>
            </CardSection>
        </div>
    );
}

export default EditProduct
