
import ShopItem from './ShopItem';
import './Shop.css';


const Shop = ( { shopDb, productDetail, details, hideList } ) =>{
   

    return(
        
        <div className='shopItems'>
            {shopDb.map((item) =>(
                < ShopItem key= {item.id} 
                item = {item} 
                productDetail ={productDetail}
                 details={details} 
                 hideList = {hideList}
                 
                 />
            ))} 
        </div>
       
    );
}

export default Shop;