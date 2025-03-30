import CardProduct from '../../components/card-product/CardProduct'
import CardSection from '../../components/card-section/CardSection'
import './ProductManagement.css'



function ProductManagement() {
    return(
        <>
        <CardSection>
            <h1>Seus Produtos</h1>
            <CardProduct name='Cadeira Gamer' description='Uma Cadeira leve' category='Movel' price={200.2} amount={5} imageUrl='' />
            <CardProduct name='Cadeira Gamer' description='Uma Cadeira leve' category='Movel' price={200.2} amount={5} imageUrl='' />
            <CardProduct name='Cadeira Gamer' description='Uma Cadeira leve' category='Movel' price={200.2} amount={5} imageUrl='' />
            <CardProduct name='Cadeira Gamer' description='Uma Cadeira leve' category='Movel' price={200.2} amount={5} imageUrl='' />
        </CardSection>
    
        </>
    )
}


export default ProductManagement