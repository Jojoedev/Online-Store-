import './Pagination.css';
const Pagination = ( { itemsPerPage, totalPosts, paginate}) =>{
    
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPosts / itemsPerPage); i++){
        pageNumber.push(i);
    }
    
    //Create a function that will set the active page background to blue.
    //get the page id, which is number below.
   
    


    return(
        <nav className="navList">
            <ul>
            {pageNumber.map(number =>(
                <li className='activeLi' key = {number} >
                    <a onClick={(() => paginate(number))} on href="##">{number} </a>
                    
                </li>
            ))}
            </ul>
        </nav>
        
    );
}

export default Pagination