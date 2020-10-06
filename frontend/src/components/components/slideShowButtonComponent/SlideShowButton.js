import React, { Component } from "react";
import "./SlideShowButton.css";

class SlideShowButton extends Component {
  render() {
    let arrowDirection = this.props.dir;
    let arrowButtonClassName = `carousel-control-${arrowDirection}`;
    return (
      <div className="slideShowButton">
         <span className={arrowButtonClassName} aria-hidden="true" onClick={this.props.handleClick}></span>
            {/* <span className="sr-only">Previous</span> */}
        {/* <i  className={arrowButtonClassName} /> */}
      </div>
    );
  }
}

export default SlideShowButton;
