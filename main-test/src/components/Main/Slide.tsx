import React from "react";
import { SlideWrapper, SlideText } from "../styles/Main/SlideStyle";

const Slide = () => {
  return (
    <SlideWrapper>
      <div className="slide-container">
        <div className="slide-box original">
          <SlideText>뉴스의 호흡 제 1형 - 주식일섬!</SlideText>
          <SlideText>너무쉽주? 짱이주?</SlideText>
          <SlideText>뉴희왕 - 수천년 지나~ 마침내 선택받은~</SlideText>
          <SlideText>뉴스톡! New Stock! News-톡톡!</SlideText>
        </div>
        <div className="slide-box clone">
          <SlideText>뉴스의 호흡 제 1형 - 주식일섬!</SlideText>
          <SlideText>너무쉽주? 짱이주?</SlideText>
          <SlideText>뉴희왕 - 수천년 지나~ 마침내 선택받은~</SlideText>
          <SlideText>뉴스톡! New Stock! News-톡톡!</SlideText>
        </div>
      </div>
    </SlideWrapper>
  );
};

export default Slide;
