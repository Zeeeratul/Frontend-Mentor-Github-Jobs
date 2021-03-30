import React, { useState, useEffect } from 'react';
import MobileSearchBar from './MobileSearchBar';
import DesktopSearchBar from './DesktopSearchBar';

const checkWindowWidth = (callback) => {
    const width = document.documentElement.clientWidth;
    if (callback)
        return callback(width > 768 ? false : true)
    return width > 768 ? false : true
}

const SearchBar = () => {
    const [showMobile, setShowMobile] = useState(() => checkWindowWidth())

    useEffect(() => {
        window.addEventListener("resize", () => checkWindowWidth(setShowMobile))
        return () => window.removeEventListener("resize", checkWindowWidth)
    }, [])

    return showMobile ? <MobileSearchBar /> : <DesktopSearchBar />
}

export default SearchBar;