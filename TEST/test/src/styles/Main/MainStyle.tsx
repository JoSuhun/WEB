import styled from "styled-components";

const InfoBox = styled.div`
  width: 100%;
  background-color: #ececec;
  height: 60vh;
  display: flex;
  align-items: center;
`;

const Profile = styled.div<{imageurl:string}>`
    height: 90%;
    margin: 0 3%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-size: contain;
    background-image: url(${(props)=>props.imageurl})
  }
`


const Card = styled.div`
  background-color: #f3d6d6;
  height: 100%;
  width: 90%;

  margin-top: 10vh;
`;

export { InfoBox, Profile,Card };
