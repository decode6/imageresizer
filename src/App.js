import React, { Component } from "react";
import Resizer from "react-image-file-resizer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.state = {
      newImage: "",
    };
  }

  fileChangedHandler(event) {
    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          event.target.files[0],
          400,
          400,
          "JPEG",
          110,
          0,
          (size) => {
            console.log(size);
            this.setState({ newImage: size });
          },
          "base64",
          300,
          400
        );
      } catch (err) {
        console.log(err);
        
      }
    }
  }


  render() {
    return (
    
      <div className="App">
        <center>
        <h2> IMAGE RESIZER APPLICATION</h2>
        
        <input type="file" onChange={this.fileChangedHandler} />
        <img src={this.state.newImage} alt="" />
        <button id="downloadBtn" onClick={this.fileChangedHandler}>Download</button>
        </center>
      </div>


    );
  }
}

export default App;