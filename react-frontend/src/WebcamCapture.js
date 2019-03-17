import React, { Component } from 'react';
import Webcam from "react-webcam";

class WebcamCapture extends React.Component {
	
   constructor(props) {
    super(props)
    this.state = {
      images: [],
	  image: ''
    }
  }

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
	console.log(imageSrc);
	this.state.images.push(imageSrc);
	this.setState({image: imageSrc});
	//send imageSrc to endpoint as it is a base64 thingy
  };
  

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
		<small>{this.state.image}</small>
     </div>
    );
  }
}

export default WebcamCapture