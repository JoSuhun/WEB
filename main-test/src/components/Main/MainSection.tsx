import { Wrapper,MainCard } from "../styles/Main/MainStyle";
import { useState, useEffect } from "react";

import bgimage from "../../assets/images/bg-image.jpg";

function MainSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [word, setWord] = useState("");
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    if (scrollPosition > 20) {
      setWord("no1");
    } else {
      setWord("");
    }
  });

  return (
    <>
      <Wrapper>
        <MainCard>
          <div className="words_box">
            <p className={`key ${word}`}>
              <span className="J">S</span>
            </p>
            <p className={`key ${word}`}>
              <span className="O">T</span>
            </p>
            <p className={`key ${word}`}>
              <span className="S">O</span>
            </p>
            <p className={`key ${word}`}>
              <span className="U1">C</span>
            </p>
            <p className={`key ${word}`}>
              <span className="H">K</span>
            </p>
            <p className={`key ${word}`}>
              <span className="U2">E</span>
            </p>
            <p className={`key ${word}`}>
              <span className="N">R</span>
            </p>
            <p className={`key ${word}`}>
              <span className="N">!</span>
            </p>
          </div>
        </MainCard>
      </Wrapper>
    </>
  );
}

export default MainSection;
