import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Display from "./components/Display";

function App() {
  // console.log(process.env)
  const [displayContain, setDisplayContain] = useState('');
  const [cityInput, setCityInput] = useState('');

  const handleInputChange = async (event) => {
      await setCityInput(event.target.value);
      console.log(cityInput)
  }

  const changeDisplay = (contain) => {
    switch(contain) {
      case 'parks':
        setDisplayContain('parks');
      break;
      case 'shops':
        setDisplayContain('shops');
      break;
      case 'spots':
        setDisplayContain('spots');
      break;
      case 'add':
        setDisplayContain('add');
      break;
      case 'weather':
        setDisplayContain('weather');
      break;
      default:
        setDisplayContain('');
    }
  }



  return (
    <div className="App">
      <Header
        cityInput={cityInput}
        changeDisplay={changeDisplay}
        handleInputChange={handleInputChange}
      />
      <Display
        cityInput={cityInput}
        displayContain={displayContain}
      />
      <Footer />
    </div>
  )
}

export default App
