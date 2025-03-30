
import './App.css'
import Navbar from './components/navbar/Navbar'
import AddProduct from './pages/add-products/AddProduct'
import Home from './pages/home/Home'


function App() {


  return (
    <>
      <Navbar items={[]}/>
      <AddProduct/>
    </>
  )
}

export default App
