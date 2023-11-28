import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav/Nav';
import data from './component/data'
import Cart from './component/Cart/Cart';
import Footer from './component/Footer/Footer';
import ShopContextProvider from './component/Context/ShopContextProvider';
import { useState } from 'react';
import Search from './Shop/Search';
import InitialShop from './Shop/InitialShop';
import Pagination from './Shop/Pagination';
import Category from './Shop/Category';

function App() {
  
  const [category, setCategory] = useState("");

   
     

  return (
    <div className="App">
      <ShopContextProvider>
      <Nav />
      
      
      <Routes>
        <Route path="/" element={<InitialShop   />} />
        <Route path ="/cart" element={<Cart />} />
      </Routes>
     </ShopContextProvider>
      
     <Footer />
    </div>
  );
}

export default App;
