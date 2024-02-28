import styled from "styled-components";


const NavbarBody = styled.div`
  margin: 0;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 10vh;
  .nav {
    font-family: "Kode Mono", monospace;
    height: 10vh;
    transition-duration: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: 0.2rem;
    }
    .button_section {
      position: absolute;
      right: 5%;
      width: 7vw;
      display: flex;
      justify-content: space-between;
      span {
        margin: 0 10%;
      }
    }
  }
  .original {
    background-color: #ff260076;
  }
  .change {
    background-color: tomato;
  }
`;

export default NavbarBody;
