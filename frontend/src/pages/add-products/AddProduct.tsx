
import { CirclePlus, CircleX, Save } from 'lucide-react'
import { Link } from 'react-router-dom'
import CardSection from '../../components/card-section/CardSection'
import './AddProduct.css'
import { ProductRequestDTO } from '../../types/productTypes'
import { useRef, useState } from 'react'
import { createProduct } from '../../apis/api-backend/productServices'
import { apiImage } from '../../infra/axios/axiosInstance'





function AddProduct() {

    const [formData, setFormData] = useState<ProductRequestDTO>({
        name: '',
        description: '',
        category: "",
        imageUrl: "",
        price: 1,
        amount: 1
    })

    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const uploadPreset = "joinnnnn";

    const uploadImage = async (files: FileList | null) => {
        if (!files || files.length === 0) return;

        setLoading(true);
        setError("");

        const file = files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", uploadPreset);

        try {
            const response = await apiImage.post(
                `/upload`,
                formData
            );
            let secureUrl = response.data.secure_url as string
            setImageUrl(secureUrl);
            setFormData((prevData) => ({
                ...prevData,
                imageUrl: secureUrl
            }))
            console.log("Upload realizado:", response.data);
        } catch (error) {
            console.error("Erro no upload:", error);
        }
    };

    const hadleCreateProduct = () => {
        createProduct(formData)
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
                    <option>Roupa</option>
                    <option>Eletronico</option>
                    <option>Roupa</option>
                    <option>Outros</option>
                </select>
                <label>Descrição *</label>
                <textarea id='product-description' name="description" onChange={handleInputChange} value={formData.description}></textarea>

            </CardSection>

            <CardSection>
                <h2>Imagem do produto</h2>

                <div className='div-image'>
                    <label for="file-upload" class="upload-label">
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
                <label>Preço *</label>
                <input id='product-price' name='price' value={formData.price} onChange={handleInputChange} placeholder='Ex: 20,00' type="number" />
                <label>Estoque *</label>
                <input id='product-amount' name='amount' value={formData.amount} onChange={handleInputChange} placeholder='Ex: 50' type="number" />

            </CardSection>
            <div className="buttons">
                <button className='button save' onClick={hadleCreateProduct} ><Save color="#fff" /> Salvar</button>
                <button className='button cancel' ><CircleX size={22} color="#fff" /> Cancelar</button>
            </div>

        </div>
    )
}

export default AddProduct