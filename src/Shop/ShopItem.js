import { useContext } from "react";
import {ShopContext}  from "../component/Context/ShopContextProvider";



const ShopItem = ({ item }) =>{
    
    const  { addToCart,removeFromCart, cartItems} = useContext(ShopContext);
    const counter = cartItems[item.id]
    //console.log(item.id)
    
    return(
        <div>
            <div>
                <img src={item.image} alt="imgs" />
                <div>
                    <p>{item.name}</p>
                    <p>N{item.price}</p>
                    <button className="addToBtn" onClick={() => addToCart(item.id)}>Add to Cart {counter > 0 && <>({counter})</>} </button>
                    <button className="removeToBtn" onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ShopItem;