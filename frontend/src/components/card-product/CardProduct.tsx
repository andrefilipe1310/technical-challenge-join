import './CardProduct.css'
import { FilePenLine, Trash2 } from 'lucide-react';
import image from '../../assets/images/image-not-found.jpg'
import { ProductRequestDTO } from '../../types/productTypes';
function CardProduct(productRequestDTO:ProductRequestDTO) {
    return (
        <div className='card-product'>
            <div className='grid grid-template-columns-inline-2'>
                <div className='div-title'>
                    <img src={image} alt="imagem do produto" />
                    <div>
                        <h2 className='title'>{productRequestDTO.name}</h2>
                        <p className='category'>{productRequestDTO.category}</p>
                    </div>
                </div>
                <div className="div-checkbox">
                    <input type="checkbox" />
                </div>
            </div>
            <div className="grid flex grid-template-columns-inline-2">
                <div className='div-price'>
                    <p>preço</p>
                    <p className='price'>R${productRequestDTO.price}</p>
                </div>
                <div className="div-amount">
                    <p>Estoque</p>
                    <p className='amount'>{productRequestDTO.amount}</p>
                </div>
            </div>
            <div className='buttons'>
                <button className='edit-product'><FilePenLine /></button>
                <button className='delete-product'><Trash2 /></button>
            </div>


            <p>{productRequestDTO.description}</p>

        </div>


    )
}


export default CardProduct