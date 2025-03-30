
import './App.css'
import Navbar from './components/navbar/Navbar'
import AddProduct from './pages/add-products/AddProduct'
import EditProduct from './pages/edit-product/EditProduct'
import Home from './pages/home/Home'
import ProductManagement from './pages/product-management/ProductManagement'


function App() {


  return (
    <>
      <Navbar items={[]}/>
      <EditProduct id={1}/>
    </>
  )
}

export default App
