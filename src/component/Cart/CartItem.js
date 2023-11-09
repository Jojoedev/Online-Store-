import { useContext } from "react";
import { ShopContext } from "../Context/ShopContextProvider";


const CartItem = ({product}) =>{
    const  { addToCart,removeFromCart, cartItems} = useContext(ShopContext);
    
    return(
            <div>
                <img src={product.image} alt="pix" />
                <div>
                <div className="productName">{product.name}</div>
                <div className="productPrice">N{product.price}</div>
                </div>
                <div>
                    <button onClick={() => addToCart(product.id)}>+</button>
                    <input value={cartItems[product.id]}  className="inputText" />
                    <button onClick={() => removeFromCart(product.id)}>-</button>
                </div>
            </div>

    );
}

export default CartItem;