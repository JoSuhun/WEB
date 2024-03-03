import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import StopIcon from "@mui/icons-material/Stop";

const Wrapper = styled.div`
  margin-bottom: 3%;
  overflow: hidden;
`;

const Container = styled.div`
  height: 60vh;
  width: 100dvw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
`;

const Slides = styled.div`
  z-index: 1;
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
`;

const Slide = styled.div`
  background-color: transparent;
`;

const PrevButton = styled(ArrowLeftIcon)`
  background-color: transparent;
  border: none;
  position: absolute;
  z-index: 5;
  left: 0;
  color: white;
`;
const NextButton = styled(ArrowRightIcon)`
  background-color: transparent;
  border: none;
  position: absolute;
  z-index: 10;
  right: 1%;
  color: white;
`;

const IndexBox = styled.div`
  display: flex;
  justify-content: center;
  .focused_card {
    color: blue;
  }
`;

const CardIndex = styled(StopIcon)`
  font-size: 1.1rem !important;
  color: #ececec;
`;

const CarouselCard = styled.div<{ bgimage: string }>`
  width: 100dvw;
  height: 100%;
  background-color: #ececec;
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-position: bottom 10% right;
  position: relative;
  overflow: hidden;
  &::before {
    background-color: #000000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export {
  Wrapper,
  Container,
  Slides,
  Slide,
  PrevButton,
  NextButton,
  IndexBox,
  CardIndex,
  CarouselCard,
};
