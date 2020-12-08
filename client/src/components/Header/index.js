import React from 'react'
import Navbuttons from '../Navbuttons'

function Header({changeDisplay, handleInputChange, cityInput}) {
    return (
        <div>
            <h1>Sk8tool</h1>
            <Navbuttons
                changeDisplay={changeDisplay}
                handleInputChange={handleInputChange}
                cityInput={cityInput}
            />
        </div>
    )
}

export default Header
