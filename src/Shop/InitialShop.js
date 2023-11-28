import data from '../component/data';
import './Shop.css'
import Shop from './Shop';
import { useState } from 'react';
import ItemDetails from './ItemDetails';
import Search from './Search';
import Pagination from './Pagination';


const InitialShop = () =>{

    const [search, setSearch] = useState("");
  
    const [hideList, setHideList] = useState(true)

    const [resetHide, setResetHide] = useState(true)
    
    const [details, setDetails] = useState([])

    const [itemsPerPage] = useState(6)

    const [currentPage, setCurrentPage] = useState(1)
  
    
    const paginate =currentPage => {
      setCurrentPage(currentPage)  
    
    }


    const productDetail = (item) =>{
            let myDetail = data.find(prod =>prod.id === item.id)
            setDetails(myDetail)
            setHideList(!hideList)
                       
    }

        
//Get Current Post

const indexOfLastPost = itemsPerPage * currentPage;
const indexOfFirstPost = indexOfLastPost - itemsPerPage;
const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

    return(  
        <div>
       { hideList && resetHide &&
       <Search search = {search} setSearch={setSearch} />
       }

        {hideList && resetHide &&
        <Shop shopDb = {currentPosts.filter(item => ((item.category).toLowerCase()).includes(search.toLowerCase()))} productDetail={productDetail}
         details={details}
         hideList = {hideList}
         
         /> }
        <ItemDetails details = {details} 
        hideList = {hideList} 
        resetHide = {resetHide}
        setResetHide = {setResetHide}
        setHideList = {setHideList}

        />             
       
       {hideList && resetHide && <Pagination 
        itemsPerPage = {itemsPerPage} 
        totalPosts = {data.length} 
        paginate={paginate} 
    
    /> }

    
        </div>
       
    );
}

export default InitialShop;