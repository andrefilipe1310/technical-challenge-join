import Home from "../pages/home/Home";
import { Routes, Route  } from "react-router-dom";
import AddProduct from "../pages/add-products/AddProduct";
import ProductManagement from "../pages/product-management/ProductManagement";
import EditProduct from "../pages/edit-product/EditProduct";
import NotFound from "../pages/not-found/NotFound";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product-management" element={<ProductManagement />} />
        <Route path="/edit-product/:idParams" element={<EditProduct />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    );
  };
  
  export default AppRoutes