import React from 'react';
import {ReactComponent as SearchIcon} from '../../../assets/desktop/icon-search.svg'
import {ReactComponent as LocationIcon} from '../../../assets/desktop/icon-location.svg'

function SearchBar() {
    return (
        <div className="desktop-search-bar">
            <div className="desktop-search-bar__input-block">
                <SearchIcon viewBox="0 0 24 24" />
                <input
                    className="desktop-search-bar__input"
                    placeholder="Filter by title, companies, expertise…"
                />
            </div>
            
            <div className="desktop-search-bar__input-block desktop-search-bar__input-block--location">
                <LocationIcon viewBox="0 0 17 24" />
                <input
                    className="desktop-search-bar__input"
                    placeholder="Filter by location…"
                />
            </div>

            <div className="desktop-search-bar__filter-block">
                <button className="button1 desktop-search-bar__button">Search</button>
            </div>
        </div>
    );
}

export default SearchBar;
