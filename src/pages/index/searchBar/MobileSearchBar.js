import React, { useState } from 'react';
import {ReactComponent as SearchIcon} from '../../../assets/desktop/icon-search.svg'
import {ReactComponent as FilterIcon} from '../../../assets/mobile/icon-filter.svg'
import {ReactComponent as LocationIcon} from '../../../assets/desktop/icon-location.svg'
import Checkbox from '../../../component/Checkbox';
// import {ReactComponent as CheckIcon} from '../../assets/desktop/icon-check.svg'
// import {
//     CustomCheckbox,
//     CustomCheckboxContainer,
//     CustomCheckboxInput,
//   } from "@reach/checkbox";
//   import "@reach/checkbox/styles.css";

function FilterModal({ close }) {
    const handleClose = (ev) => {
        if (ev.target === ev.currentTarget)
            close()
    }

    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className="modal-card">
                <div className="modal-card__input-block">
                    <LocationIcon viewBox="0 0 17 24" className="modal-card__icon" />
                    <input 
                        className="modal-card__text-field" 
                        placeholder="Filter by location..."
                    />
                </div>

                <Checkbox />

                <div className="modal-card__row">
                    <button className="button1 modal-card__button">Search</button>
                </div>
            </div>
        </div>
    )
}


function MobileSearch() {
    const [showModal, setShowModal] = useState(true)
    const handleOpenModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

    return (
        <>
            {showModal && <FilterModal close={handleCloseModal} /> }

            <div className="mobile-search-bar">
                <input
                    className="mobile-search-bar__input"
                    placeholder="Filter by title..."
                />

                <FilterIcon onClick={handleOpenModal} viewBox="0 0 20 20" className="mobile-search-bar__filter" />

                <button className="button1 mobile-search-bar__button">
                    <SearchIcon viewBox="0 0 24 24" className="mobile-search-bar__search" />
                </button>
            </div>
        </>
    );
}

export default MobileSearch;
