import React from 'react'
import Container from '../Container'
import NavButtons from '../NavButtons';

function Header({changeDisplay, handleInputChange, cityInput}) {
    return (
        <div>
            <Container>
            <h1>Sk8tool</h1>
            <NavButtons
                changeDisplay={changeDisplay}
                handleInputChange={handleInputChange}
                cityInput={cityInput}
            />
            </Container>
        </div>
    )
}

export default Header
