import React, { useEffect, useState } from "react";
import NavbarBody from "../styles/NavbarStyle";

type Props = {};

function Navbar({}: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <>
      <NavbarBody>
        <div className={scrollPosition < 100 ? "nav original" : "nav change"}>
          <span className="title">HOHOHOHOHOHOHOH</span>
          <div className="button_section">
            <span>no.1</span>
            <span>no.2</span>
          </div>
        </div>
      </NavbarBody>
    </>
  );
}

export default Navbar;
