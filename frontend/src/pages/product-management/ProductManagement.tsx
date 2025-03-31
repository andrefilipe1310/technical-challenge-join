import { useEffect, useState } from 'react'
import { deleteByIdProduct, findAllProduct } from '../../apis/api-backend/productServices'
import CardProduct from '../../components/card-product/CardProduct'
import CardSection from '../../components/card-section/CardSection'
import './ProductManagement.css'
import { ProductResponseDTO } from '../../types/productTypes'



function ProductManagement() {
    const [products, setProducts] = useState<ProductResponseDTO[]>([])
    const handleFindAllProducts = async () => {
        const response = await findAllProduct()
        if (response) {
            setProducts(response)
        }

    }

    const handleDeleteByIdProduct = (id: number): void => {
        deleteByIdProduct(id)
        setProducts(prevProducts => prevProducts.filter(product => product.id !== id))
    }
    
    useEffect(() => {
        handleFindAllProducts()
    }, [])
    return (
        <>
            <CardSection>
                <h1>Seus Produtos</h1>
                {products.map((product) => {
                    return (
                        <CardProduct onDelete={handleDeleteByIdProduct} product={product} />
                    )
                })}
            </CardSection>

        </>
    )
}


export default ProductManagement