import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = () => {

    const [search, setsearch] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(search);
    }

  return (
    <div className='searchbar'>
        <div className="searchbar-container">
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={() => setsearch(event.target.value)} placeholder='Seacrch here...' required />

                <button className='search-btn' type='submit'>
                    Explore
                </button>
            </form>
            <p>Find lawyers</p>
        </div>
    </div>
  )
}

export default SearchBar