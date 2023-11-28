import { createContext, useState } from "react";
import data from '../../component/data';


export const ShopContext = createContext(null);


const ShopContextProvider = ( {children} ) =>{

    const initialState = () =>{
    
        let cart = {};
        for(let i = 1;  i < data.length + 1; i++){
            cart[i] = 0;
        }
       return cart;
    }

    const [cartItems, setCartItems] = useState(initialState());

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) =>{
                if(cartItems[itemId] > 0){

                setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1}))
                } 
                else
                {
                  alert("Quantity cannot be less than 0")
                    return;
                }                
            }

    const totalAmount = () =>{
        let amount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let productItem = data.find(prod => prod.id === Number(item))
                amount +=cartItems[item] * productItem.price;
            }
            
        }
        return amount;
    }

    return(
        <ShopContext.Provider value ={{
            cartItems,
            addToCart,
            removeFromCart,
            totalAmount,

        }} >
            {children}
        </ShopContext.Provider>

    );
}

export default ShopContextProvider;