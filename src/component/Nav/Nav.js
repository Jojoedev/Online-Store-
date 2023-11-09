import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import './Nav.css';
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContextProvider";

const Nav = () =>{
    
    const {cartItems, totalAmount} = useContext(ShopContext);
    
        const TotalCartItems = () =>{
            let units = 0;
            for(let key in cartItems){
                units = units + cartItems[key]
                console.log(units);
            }
            return units;
        }   
        
    return(
        <div className="navbar">
            <Link className="text1" to="/">Online Shop</Link>            
            <Link className="text2" to ="/cart"><ShoppingCart size={40} /> <> {TotalCartItems()} </>
             <span style={{margin: '20px'}}>Total Amount: N{totalAmount()}</span>
            
            </Link>
           
        </div>
    );
}

export default Nav;