import React, { useEffect, useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        console.log("Pressed");
        setSearchInput(e.target.value);
    };

    useEffect(() => {
        onSearch(searchInput);
    }, [searchInput]);

    return (
            <div>
                <input id="entity-list-search-bar" type="search" placeholder="Search..." onChange={handleChange}></input>
            </div>
    )
};


export default SearchBar;