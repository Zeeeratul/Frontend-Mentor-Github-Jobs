import React from 'react';

function Checkbox({ label = 'Full Time Only' }) {

    const [checked, setChecked] = React.useState(true)

    const handleCheckbox = (ev) => {
        setChecked(ev.target.checked)
    }

    return (
        <label className="checkbox-container">
            <input 
                className="checkbox-container__input"
                type="checkbox" 
                checked={checked} 
                onChange={handleCheckbox}
            />
            <span className="checkmark" />
            {label}
        </label>

    )
}

export default Checkbox;