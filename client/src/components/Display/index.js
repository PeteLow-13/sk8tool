import React, { useState, useEffect } from 'react';
import ViewParks from '../ViewParks';
import ViewShops from '../ViewShops';
import ViewSpots from '../ViewSpots';
import Weather from '../Weather';
import AddSpot from '../AddSpot';



function Display({cityInput, displayContain}) {
    const [city, setCity] = useState('');
    const [contain, setContain] = useState('');
    useEffect(() => {
        setContain(displayContain);
        setCity(cityInput);
    });
    console.log('display: ', city);
    console.log('display: ', contain);
    switch(contain) {
        case 'parks':
            return (
                <ViewParks/>
            )
        case 'shops':
            return (
                <ViewShops/>
            )
        case 'spots':
            return (
                <ViewSpots/>
            )
        case 'add':
            return (
                <AddSpot/>
            )
        case 'weather':
            return (
                <Weather/>
            )
        default:
            return (
                <div>
                    <p>Heres where the display will go</p>
                </div>
            )
    }

}

export default Display
