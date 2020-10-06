import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { nextImage, prevImage } from '../actions/ImageActions';
import "./SlideShow.css";
import SlideShowButton from "./components/slideShowButtonComponent/SlideShowButton";
import Screen from "./components/screenComponent/Screen";

class SlideShow extends Component {
  render() {
      let currentImageID = this.props.currentImageID;
    return (
      <div className="row slideShowContainer"  >
         <Screen currentImageID={currentImageID} />
        <SlideShowButton handleClick={() => this.props.prevImage(currentImageID.currentImageID)} dir={"prev-icon"} />
       
        <SlideShowButton handleClick={() => this.props.nextImage(currentImageID.currentImageID)} dir={"next-icon"} />
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        currentImageID: state.currentImageID
    };
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({nextImage: nextImage, prevImage: prevImage},dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SlideShow);
