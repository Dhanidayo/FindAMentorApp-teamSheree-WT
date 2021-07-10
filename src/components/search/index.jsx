// import { useEffect } from "react";
// import { useState } from "react";
import { useHistory } from "react-router";





const Search = () => {

    const searchHistory = useHistory();

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        searchHistory.replace(`/search?search=${searchValue.toLowerCase()}`)
    }

    return (

        <input
            type="text"
            name="search"
            id="search"
            onChange={handleSearch}
            placeholder="'Solape, 'Software Developer', or 'Microsoft'..."
        />

    );

}

export default Search;