import React, { useState, useEffect } from 'react';
import ViewParks from '../ViewParks';
import ViewShops from '../ViewShops';
import ViewSpots from '../ViewSpots';
import Weather from '../Weather';
import AddSpot from '../AddSpot';
import Container from '../Container';



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
                    <Container>
                        <div id='current-time'></div>
                        <div id='current-weather'></div>
                        <h2>Welcome to Sk8Tool.</h2>
                        <p>Use our tools to find Skateshops, Skateparks or access our list of user added Skatespots near and far. Enter a city to find out what's near you</p>
                    </Container>
                </div>
            )
    }

}

export default Display
