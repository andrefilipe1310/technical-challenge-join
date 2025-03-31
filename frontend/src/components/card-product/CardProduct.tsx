import './CardProduct.css'
import { FilePenLine, Trash2 } from 'lucide-react';
import image from '../../assets/images/image-not-found.jpg'
import { ProductResponseDTO } from '../../types/productTypes';
import { Link } from 'react-router-dom';
function CardProduct({ product, onDelete }: { product: ProductResponseDTO; onDelete: (id: number) => void }) {

   


    return (
        <div className='card-product'>
            <div className='grid grid-template-columns-inline-2'>
                <div className='div-title'>
                    <img src={product.imageUrl || image} alt="imagem do produto" />
                    <div>
                        <h2 className='title'>{product.name}</h2>
                        <p className='category'>{product.category}</p>
                    </div>
                </div>
                <div className="div-checkbox">
                    <input type="checkbox" />
                </div>
            </div>
            <div className="grid flex grid-template-columns-inline-2">
                <div className='div-price'>
                    <p>preço</p>
                    {/* convertendo os centavos para o valor em reais */}
                    <p className='price'>R${product.price/100},00</p>
                </div>
                <div className="div-amount">
                    <p>Estoque</p>
                    <p className='amount'>{product.amount}</p>
                </div>
            </div>
            <div className='buttons'>
                <Link to={`/edit-product/${product.id}`}><button className='edit-product'><FilePenLine /></button></Link>
                <button className='delete-product' onClick={() => onDelete(product.id)}><Trash2 /></button>
            </div>


            <p className='description'>{product.description}</p>

        </div>


    )
}


export default CardProduct