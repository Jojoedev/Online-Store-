import data from '../component/data';
import ShopItem from './ShopItem';
import './Shop.css';


const Shop = () =>{
    return(
        <div className='shopItems'>
            {data.map((item) =>(
                < ShopItem key= {item.id} item = {item} />
            ))}
        </div>
    );
}

export default Shop;