import React, { Component } from 'react';
import Carousel from './Carousel.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to WeatherMan</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js or test</code> and save to reload.
        </p>
        <Carousel/>
      </div>
    );
  }
}

export default App;
