import React from 'react'

function Navbuttons() {
    return (
        
        <div id='button-bar' class='button-bar'>
            <input className='city-input' id='city-input' type="text" placeholder='Enter city'/>
            <button className='nav-btn' id="parks-btn">Parks</button>
            <button className='nav-btn' id="shops-btn">Shops</button>
            <button className='nav-btn' id="view-spots">View-Spots</button>
            <a href='/add-spot'><button className='nav-btn' className='home-btn' id="home-btn">Add-Spot</button></a>
            <button className='nav-btn' id="weather-btn">Weather</button>

        </div>
    
    )
}

export default Navbuttons
