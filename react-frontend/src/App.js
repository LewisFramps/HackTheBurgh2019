import React, { Component } from 'react';
import Webcam from "react-webcam";
import WebcamCapture from './WebcamCapture'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
	  	<WebcamCapture />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
