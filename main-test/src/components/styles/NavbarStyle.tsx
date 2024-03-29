import styled from "styled-components";

const NavbarBody = styled.div`
  margin: 0;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 13vh;
  overflow: hidden;
  .nav {
    font-family: "Giants-Inline";
    height: 13vh;
    transition-duration: 300ms;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    z-index: 5;
    .title {
      font-weight: 700;
      font-size: 2.2rem;
      letter-spacing: 0.2rem;
    }
    .button-section {
      position: absolute;
      right: 5%;
      display: flex;
      justify-content: space-between;
      button {
        font-family: "SEBANG_Gothic_Bold";
        cursor: pointer;
        margin: 0 10%;
        font-size: 1.7rem;
        text-align: center;
        align-items: center;
        background-color: #ff7530;
        color: white;
        border: none;
        border-radius: 10px;
        width: 7vw;
        height: 5vh;
      }
      .login-btn {
        background-color: navy;
      }
      :nth-child(1) {
      }
    }
  }
  .original {
    background-color: #ffffff76;
  }
  .change {
    background-color: #ffffff;
  }
  .navbar-container {
    width: 20%;
    height: 100vh;
    background-color: #ecececdb;
    position: fixed;
    right: 0;
    transition: transform 0.5s ease;
  }
  .open {
    transform: translateY(0);
  }
  .close {
    transform: translateY(-100%);
  }

  .nav-selector {
    color: navy;
    p {
      cursor: pointer;
      margin: 10% 5%;
      padding-left: 3%;
      font-size: 1.5rem;
      font-weight: 200;
      font-family: "Noto Sans KR", sans-serif;
      &:hover {
        color: white;
        background-color: #ff7530;
      }
    }
  }
`;

export default NavbarBody;
