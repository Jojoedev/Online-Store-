import { Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './Shop/Shop';
import ShopItem from './Shop/ShopItem';
import Nav from './component/Nav/Nav';
import Cart from './component/Cart/Cart';
import Footer from './component/Footer/Footer';
import { ShopContext } from './component/Context/ShopContextProvider';
import ShopContextProvider from './component/Context/ShopContextProvider';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Nav />
           
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path ="/cart" element={<Cart />} />
      </Routes>
     </ShopContextProvider>
     <Footer />
    </div>
  );
}

export default App;
