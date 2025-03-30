
import { CirclePlus, CircleX, Save } from 'lucide-react'
import CardSection from '../../components/card-section/CardSection'
import './AddProduct.css'




function AddProduct() {
    return (
        <div>
            <h1>Cadastre o seu produto</h1>
            <div className="buttons">
                <button id='save' className='button'><Save color="#fff" /> Salvar</button>
                <button id='cancel' className='button'><CircleX size={22} color="#fff" /> Cancelar</button>
            </div>
            <CardSection>
                <h2>Informações basicas</h2>
                <label>Nome do Produto *</label>
                <input placeholder='EX: Abacaxi, Melão' type="text" id='product-name' />
                <label>Categoria *</label>
                <select id='product-category'>
                    <option>Roupa</option>
                    <option>Roupa</option>
                    <option>Roupa</option>
                    <option>Roupa</option>
                </select>
                <label>Descrição *</label>
                <textarea name="" id='product-description'></textarea>

            </CardSection>

            <CardSection>
                <h2>Imagem do produto</h2>

                <div className='div-image'>
                
                <h3><CirclePlus id='icon-circle-plus' color="#000" /> Adicionar Imagem</h3>
                </div>
            </CardSection>

            <CardSection>
                <h2>Preço e Estoque</h2>
                <label>Preço *</label>
                <input placeholder='Ex: 20,00' type="number" />
                <label>Estoque *</label>
                <input placeholder='Ex: 50' type="number" />

            </CardSection>
            <div className="buttons">
                <button id='save' className='button'><Save color="#fff" /> Salvar</button>
                <button id='cancel' className='button'><CircleX size={22} color="#fff" /> Cancelar</button>
            </div>

        </div>
    )
}

export default AddProduct