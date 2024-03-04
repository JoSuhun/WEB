import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  margin: 5% 0;
`

const MainCard = styled.div`
  width: 90%;
  height: 100%;
  background-color: #ececec;
  border-radius: 20px;
  .words_box {
    position: relative;
    z-index: 100;
    margin-left: 5%;
    padding-top: 5%;
    p {
      display: inline-block;
    }
  }
  span {
    font-size: 8rem;
    letter-spacing: 1.2rem;
    font-family: "Giants-Inline";
  }
  .no1 {
    color: #4a4a4a;
  }

  @keyframes fallingAnimation {
    100% {
      transform: translateY(90%);
      opacity: 1;
    }
  }

  .words_box .no1 {
    animation: fallingAnimation 0.5s ease forwards;
  }
  .words_box .key:nth-child(1) {
    animation-delay: 0.2s;
  }
  .words_box .key:nth-child(2) {
    animation-delay: 0.4s;
  }
  .words_box .key:nth-child(3) {
    animation-delay: 0.6s;
  }
  .words_box .key:nth-child(4) {
    animation-delay: 0.3s;
  }
`;

const KeywordsCard = styled.div`
  background-color: navy;
  height: 50vh;
`;
export { Wrapper, MainCard, KeywordsCard };
