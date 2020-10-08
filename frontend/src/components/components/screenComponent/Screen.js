import React, { Component } from "react";
import "./Screen.css";

class Screen extends Component {
  render() {

    let selectedImage = require(`./resources/images/banners/photo_${
      this.props.currentImageID.currentImageID
    }.jpeg`);

    let styles = {
        backgroundImage: 'url(' + selectedImage + ')',
    }

    return <div style={styles} className="col-16 col-sm-120 col-md-12 screen"/>;
  }
}

export default Screen;
