import React from "react";
import { SlideWrapper, SlideText } from "../styles/Main/SlideStyle";

const Slide = () => {
  return (
    <SlideWrapper>
      <div className="slide-container">
        <div className="slide-box original">
          <SlideText>TODAY'S STOCKER</SlideText>
          <SlideText>ECONOMIC NEWS RECOMMENDATION</SlideText>
          <SlideText>CUSTOMIZED NEWS HUB</SlideText>
          <SlideText>NEWS & STOCK</SlideText>
        </div>
        <div className="slide-box clone">
          <SlideText>TODAY'S STOCKER</SlideText>
          <SlideText>ECONOMIC NEWS RECOMMENDATION</SlideText>
          <SlideText>CUSTOMIZED NEWS HUB</SlideText>
          <SlideText>NEWS & STOCK</SlideText>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide;
