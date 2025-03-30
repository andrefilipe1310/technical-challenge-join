import { useState } from 'react'
import CardSection from '../../components/card-section/CardSection'
import { ProductRequestDTO } from '../../types/productTypes'
import './EditProduct.css'
import { CirclePlus, Save } from 'lucide-react'



function EditProduct({ id }: { id: number }) {

    const [formData, setFormData] = useState<ProductRequestDTO>({
        name: '',
        description: '',
        category: "",
        imageUrl: "",
        price: 1,
        amount: 0
    })


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <>
            <h1>{formData.name}</h1>
            <CardSection>
                <h2>Informações basicas</h2>
                <label htmlFor="product-name">Nome do Produto *</label>
                <input id='product-name' name="name" value={formData.name} onChange={handleInputChange} placeholder='EX: Abacaxi, Melão' type="text" />
                <label>Categoria *</label>
                <select id='product-category' name='category' onChange={handleInputChange} value={formData.category}>
                    <option>Roupa</option>
                    <option>Eletronico</option>
                    <option>Roupa</option>
                    <option>Outros</option>
                </select>
                <label>Descrição *</label>
                <textarea id='product-description' name="description" onChange={handleInputChange} value={formData.description}></textarea>
                <h2>Imagem do produto</h2>

                <div className='div-image'>

                    <h3><CirclePlus id='icon-circle-plus' color="#000" /> Adicionar Imagem</h3>
                </div>
                <h2>Preço e Estoque</h2>
                <label>Preço *</label>
                <input id='product-price' name='price' value={formData.price} onChange={handleInputChange} placeholder='Ex: 20,00' type="number" />
                <label>Estoque *</label>
                <input id='product-amount' name='amount' value={formData.amount} onChange={handleInputChange} placeholder='Ex: 50' type="number" />
                <div className="buttons">
                    <button id='save' className='button'><Save color="#fff" /> Salvar</button>
                </div>
            </CardSection>
        </>
    )
}


export default EditProduct