import { useEffect, useState } from 'react'
import { deleteByIdProduct, findAllProduct } from '../../apis/api-backend/productServices'
import CardProduct from '../../components/card-product/CardProduct'
import CardSection from '../../components/card-section/CardSection'
import './ProductManagement.css'
import { ProductResponseDTO } from '../../types/productTypes'

function ProductManagement() {
    const [page, setPage] = useState(0)
    const [items] = useState(3)
    const [products, setProducts] = useState<ProductResponseDTO[]>([])
    
    const handleFindAllProducts = async () => {
        const response = await findAllProduct({page, items})
        if (response) {
            setProducts(response)
        }
    }

    const handleGoToPage = () => {
        setPage(page + 1)
    }

    const handlePreviousPage = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    const handleDeleteByIdProduct = (id: number) => {
        deleteByIdProduct(id)
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id))
    }
    
    useEffect(() => {
        handleFindAllProducts()
    }, [page])

    return (
        <div className='main'>
            <CardSection>
                <h1>Seus Produtos</h1>
                {products.map((product) => (
                    <CardProduct 
                        key={product.id}
                        onDelete={handleDeleteByIdProduct} 
                        product={product} 
                    />
                ))}
            </CardSection>
            <div className='pagination-controls'>
                <button 
                    className='button' 
                    onClick={handlePreviousPage}
                    disabled={page === 0}
                >
                    Anterior
                </button>
                <button className='button'>{page + 1}</button>
                <button 
                    className='button' 
                    onClick={handleGoToPage}
                >
                    Próximo
                </button>
            </div>
        </div>
    )
}

export default ProductManagement