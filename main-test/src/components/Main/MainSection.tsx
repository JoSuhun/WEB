import { MainCard } from "../styles/Main/MainStyle";
import { useState, useEffect } from "react";

import bgimage from '../../assets/images/bg-image.jpg'

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
      <MainCard>
        <div className="words_box">
          <p className={`key ${word}`}>
            <span className="J">J</span>
          </p>
          <p className={`key ${word}`}>
            <span className="O">O</span>
          </p>
          <p className={`key ${word}`}>
            <span className="S">S</span>
          </p>
          <p className={`key ${word}`}>
            <span className="U1">U</span>
          </p>
          <p className={`key ${word}`}>
            <span className="H">H</span>
          </p>
          <p className={`key ${word}`}>
            <span className="U2">U</span>
          </p>
          <p className={`key ${word}`}>
            <span className="N">N</span>
          </p>
          <p className={`key ${word}`}>
            <span className="N">!</span>
          </p>
        </div>
      </MainCard>
    </>
  );
}

export default MainSection;
