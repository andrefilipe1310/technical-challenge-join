
import { CirclePlus, CircleX, Save } from 'lucide-react'
import { Link } from 'react-router-dom'
import CardSection from '../../components/card-section/CardSection'
import './AddProduct.css'
import { ProductRequestDTO } from '../../types/productTypes'
import { useState } from 'react'
import { createProduct } from '../../apis/api-backend/productServices'
import { apiImage } from '../../infra/axios/axiosInstance'


type Asset = { //type para mapear a resposta do cloudinary
    asset_folder: string
    asset_id: string
    bytes: number
    created_at: string
    display_name: string
    etag: string
    format: string
    height: number
    original_filename: string
    placeholder: boolean
    public_id: string
    resource_type: string
    secure_url: string
    signature: string
    tags: string[]
    type: string
    url: string
    version: number
    version_id: string
    width: number
}


function AddProduct() {



    const [formData, setFormData] = useState<ProductRequestDTO>({
        name: '',
        description: '',
        category: '',
        imageUrl: '',
        price: 1,
        amount: 1
    })

    const [imageUrl, setImageUrl] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    //upload registrado apenas para esse teste, para funcionar precisa ajustar as permissões diretamente no painel do cloudinary
    const uploadPreset = 'joinnnnn'
    // função para salvar a imagem antes e enviar a url na hora de salvar o produto
    const uploadImage = async (files: FileList | null) => {
        if (!files || files.length === 0) return
        setLoading(true)
        setError("")
        const file = files[0]
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", uploadPreset)

        try {
            const response = await apiImage.post(
                `/upload`,
                formData
            );
            let asset = response.data as Asset
            let secureUrl = asset.secure_url
            setImageUrl(secureUrl);
            setFormData((prevData) => ({
                ...prevData,
                imageUrl: secureUrl
            }))
            console.log("Upload realizado:", response.data)
        } catch (error) {
            console.error("Erro no upload:", error)
        }
    };

    const hadleCreateProduct = async () => {
        // Salvando em centavos para evitar erros de arredondamento
        formData.price *= 10 
      
        try {
            await createProduct(formData)
            alert("product cadastrado com sucesso")
            setFormData({
                name: '',
                description: '',
                category: '',
                imageUrl: '',
                price: 1,
                amount: 1
            })
        } catch (error) {
            console.log(error)
        }

    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div className='main'>

            <div className="buttons">
                <button className='button save' onClick={hadleCreateProduct} ><Save color="#fff" /> Salvar</button>
                <Link to={`/home`} ><button className='button cancel' ><CircleX size={22} color="#fff" /> Cancelar</button></Link>
            </div>

            <h1>Cadastre o seu produto</h1>
            <CardSection>
                <h2>Informações basicas</h2>
                <label htmlFor="product-name">Nome do Produto *</label>
                <input id='product-name' name="name" value={formData.name} onChange={handleInputChange} placeholder='EX: Abacaxi, Melão' type="text" />
                <label>Categoria *</label>
                <select id='product-category' name='category' onChange={handleInputChange} value={formData.category}>
                    <option value="Roupa">Roupa</option>
                    <option value="Eletronico">Eletrônico</option>
                    <option value="Alimentos">Alimentos</option>
                    <option value="Beleza">Beleza e Cuidados Pessoais</option>
                    <option value="Casa">Casa e Decoração</option>
                    <option value="Esporte">Esportes e Lazer</option>
                    <option value="Brinquedo">Brinquedos e Jogos</option>
                    <option value="Ferramentas">Ferramentas e Materiais de Construção</option>
                    <option value="Móveis">Móveis</option>
                    <option value="Automotivo">Automotivo</option>
                    <option value="Saúde">Saúde</option>
                    <option value="Outros">Outros</option>
                </select>
                <label>Descrição *</label>
                <textarea id='product-description' name="description" onChange={handleInputChange} value={formData.description}></textarea>

            </CardSection>

            <CardSection>
                <h2>Imagem do produto</h2>

                <div className='div-image'>
                    <label htmlFor="file-upload" className="upload-label">
                        <CirclePlus /> Adicionar Imagem
                    </label>
                    <input className='hidden-input'
                        id='file-upload'
                        type="file"
                        onChange={(e) => uploadImage(e.target.files)}
                        accept="image/*"
                        disabled={loading}
                    />

                    {loading && <p>Carregando...</p>}

                    {error && (
                        <div style={{ color: "red", marginTop: "10px" }}>
                            <p>Erro: {error}</p>
                        </div>
                    )}

                    {imageUrl && (
                        <div style={{ marginTop: "20px" }}>
                            <img
                                src={imageUrl}
                                alt="Uploaded"
                                style={{ maxWidth: "100%", maxHeight: "300px" }}
                            />
                            <p style={{ wordBreak: "break-all", fontSize: "12px" }}>
                                {imageUrl}
                            </p>
                        </div>
                    )}
                </div>
            </CardSection>


            <CardSection>
                <h2>Preço e Estoque</h2>
                {/* restrição de negativos implementada para evitar incoerencia */}
                <label>Preço *</label>
                <input id='product-price' name='price' min="1" value={formData.price} onChange={handleInputChange} placeholder='Ex: 20,00' type="number" />
                <label>Estoque *</label>
                <input id='product-amount' name='amount' min="1" value={formData.amount} onChange={handleInputChange} placeholder='Ex: 50' type="number" />

            </CardSection>
            <div className="buttons">
                <button className='button save' onClick={hadleCreateProduct} ><Save color="#fff" /> Salvar</button>
                <button className='button cancel' ><CircleX size={22} color="#fff" /> Cancelar</button>
            </div>

        </div>
    )
}

export default AddProduct