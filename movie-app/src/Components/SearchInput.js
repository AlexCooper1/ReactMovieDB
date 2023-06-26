import React from 'react';

const SearchInput = (props) => {
    return (
        <div className="col-2-md ml-auto mb-2 mt-2">
            <input
                className='form-control'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Search for a Movie...'
            ></input>
        </div>
    );
};

export default SearchInput;