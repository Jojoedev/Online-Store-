import { Link } from "react-router-dom";
import { Cursor, ShoppingCart } from "phosphor-react";
import './Nav.css';
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContextProvider";

const Nav = () =>{
    
    const {cartItems, totalAmount} = useContext(ShopContext);
    
        const TotalCartItems = () =>{
            let units = 0;
            for(let key in cartItems){
                units = units + cartItems[key]
            }
            return units;
        }   
        
    return(
        <div  className="navbar">
            <nav>
             <Link className="text1" to="/">Online Shop</Link> 
                       
            <Link className="text2" to ="/cart"><ShoppingCart size={40} /> <> {TotalCartItems()} </>
            </Link> 

            <li> <span className="Amount"> Amount: N{totalAmount()}  </span> </li>
            </nav>
        </div>
    );
}

export default Nav;