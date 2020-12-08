import React, {useState, useEffect} from 'react';
import ThirdAPI from '../../utils/ThirdAPI';

function Navbuttons({changeDisplay, handleInputChange, cityInput}) {

    const checkInputNotEmpty = (e) => {
        if(cityInput) {
            changeDisplay(e);
        }
    }

    return (

        <div id='button-bar' class='button-bar'>
            <input
                className='city-input'
                id='city-input'
                type="text"
                placeholder='Enter city'
                value={cityInput}
                onChange={handleInputChange}
            />
            <button onClick={() => checkInputNotEmpty('parks')} className='nav-btn' id="parks-btn">Parks</button>
            <button onClick={() => checkInputNotEmpty('shops')} className='nav-btn' id="shops-btn">Shops</button>
            <button onClick={() => checkInputNotEmpty('spots')} className='nav-btn' id="view-spots">View-Spots</button>
            <button onClick={() => checkInputNotEmpty('add')} className='nav-btn' className='home-btn' id="home-btn">Add-Spot</button>
            <button onClick={() => checkInputNotEmpty('weather')} className='nav-btn' id="weather-btn">Weather</button>

        </div>

    )
}

export default Navbuttons
