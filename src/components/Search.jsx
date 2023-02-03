import React from "react";


const Search = () => {
    return (
        <div>
            <div className="input-group p-1 ">
                <input type="search" className="form-control rounded " placeholder="Wyszukaj filmu" aria-label="Search"
                       aria-describedby="search-addon"/>
                <button type="button" className="btn btn-secondary">Szukaj</button>
            </div>
        </div>
    );
};

export default Search;
