import React from 'react';
import '../styles/SearchResults.css';

const SearchResults = ({searchResults}) => {

    return (
        <div>
            {searchResults.length >0 ? searchResults.map(res => {
                return (
                    <img src={res} className="search-result-image" />
                )
            }) : <div>No results</div>}
        </div>
    )
       
};

export default SearchResults;

