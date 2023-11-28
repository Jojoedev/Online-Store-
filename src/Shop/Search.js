import './Search.css'

const Search = ( {search, setSearch}) =>{
   
    return(
        <form className="searchForm" onSubmit= {(e =>e.preventDefault())}>
            <input className='searchText' type="text" 
            placeholder="Filter item by category"
            
            value={search}
            autoFocus
            onChange={(e =>setSearch(e.target.value))}
            
            />
        </form>
    );
}

export default Search