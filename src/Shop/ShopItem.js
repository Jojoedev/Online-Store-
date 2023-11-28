import { useContext } from "react";
import {ShopContext}  from "../component/Context/ShopContextProvider";
import './Shop.css';



const ShopItem = ({ item, productDetail }) =>{
    
    return(
        <div>
            
            <div className="shopItemWrapper">
                <img src={item.image} alt="imgs" />
                     <div>
                            <p>{item.name}</p>
                            <p>N{item.price}</p>
                            <button className="productDetail" onClick={() => productDetail(item)}> More Info </button>
                    </div>
            </div>

        
        </div>
    );
}

export default ShopItem;