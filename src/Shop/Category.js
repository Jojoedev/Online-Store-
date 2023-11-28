




const Category = ( {cateory, setCategory}) =>{
   
    return(
        <form className="categoryForm" onSubmit= {(e =>e.preventDefault())}>
            <input type="text" 
            placeholder="Filter item by category"
            
            value={cateory}
            autoFocus
            onChange={(e =>setCategory(e.target.value))}
            
            />
        </form>
    );
}

export default Category