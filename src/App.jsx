import "./App.css";
import {

  Routes,
  Route,

} from "react-router-dom";

import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";


import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import DetailPage from "./pages/DetailPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CartPage from "./pages/CartPage";

function App() {
  return (
      <div>
      <Header />
       <Routes>
          <Route path="/" element={ <HomePage />} />
          <Route path="/products" element={ <ProductsPage />} />
           <Route path="/products/:id" element={<DetailPage />} />
           <Route path="/signUp" element={<SignUp />} />
           <Route path="/signIn" element={<SignIn />} />
           <Route path="/cart" element={<CartPage />} />
         
        
          
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
