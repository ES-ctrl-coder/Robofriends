import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchField,searchChange}) => {
    return(
        <div className="pa2">
            <input 
                className="pa3 ba b--black bg-light-blue"
                type='search'
                placeholder='Type to Search Robots!'
                onChange={searchChange}
            ></input>
        </div>

    );
}

export default SearchBox;