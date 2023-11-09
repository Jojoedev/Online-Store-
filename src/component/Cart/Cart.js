import { useContext }  from "react";
import { ShopContext } from "../Context/ShopContextProvider";
import data from '../data'
import CartItem from './CartItem';
import './Cart.css';




const Cart = () =>{
   const { cartItems, totalAmount} = useContext(ShopContext)
   
   const totalPrice = totalAmount();

   

    return(
        <div className="cartList">
           {data.map(product =>{
            if(cartItems[product.id] > 0){
                return <CartItem product={product} />
            }
           })}


            <p style={{fontSize: '1.6rem', color: 'black', fontWeight: 'bold'}}>Total Amount: N{totalPrice}</p>
        </div>
    );
}

export default Cart;