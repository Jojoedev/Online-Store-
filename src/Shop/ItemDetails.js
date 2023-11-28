import { useContext, useState } from "react";
import {ShopContext}  from "../component/Context/ShopContextProvider";
import './Shop.css';


const ItemDetails = ( { details, hideList, hideFooter, setHideList}) =>{
   
    const  { addToCart,removeFromCart, cartItems} = useContext(ShopContext);
    const counter = cartItems[details.id]

   for(let item in cartItems){

   }
   
    return(
        <section className="itemSection">
        {!hideList && !hideFooter &&
        <div>
            <div className="detailWrapper">
                <p className="detailText" onClick ={(() =>setHideList(!hideList))}>Close</p>
                <img src={details.image} alt="imgs" />
                <div>
                    <p className="itemText">{details.name}</p>
                    <p className="itemText">N{details.price}</p>
                    <p className="itemText">{details.category}</p>
                   
                    <button className="addToBtn" onClick={() => addToCart(details.id)}>Add to Cart {counter > 0 && <>({counter})</>} </button>
                    <button  className="removeToBtn" onClick={() => removeFromCart(details.id)}>Remove from Cart</button>
                    
                    </div>
            </div>
        
        </div>
        }
        </section>
    );
}

export default ItemDetails