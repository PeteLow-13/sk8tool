import React from 'react';
import Container from '../Container';
// import './style.css';

function Footer(){
    return (
        <Container>
            <footer className='footer'>
                <span>
                 <p>©Sk8Tool made by: </p>
                 <a href='https://github.com/DanielYu0864' target='blank'>Daniel Yu,  </a><a href='https://github.com/tronciu92' target='blank'>Vasile Tronciu, and  </a><a href='https://github.com/PeteLow-13' target='blank'>Pete Low  </a>
                </span>
            </footer>
        </Container>
        
    );
}

export default Footer;