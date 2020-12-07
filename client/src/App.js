import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Display from "./components/Display";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Display />
        <Footer />
      </div>
    );
  }
}

export default App;
