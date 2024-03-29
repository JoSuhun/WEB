import React from "react";
import { ScrollAnimationContainer } from "../components/ScrollAnimationContainer";
import Navbar from "../components/Navbar";

import FirstSection from "../components/Main/FirstSection";
import SecondSection from "../components/Main/SecondSection";
import InfoSection from "../components/Main/InfoSection";

type Props = {};

const Main = (props: Props) => {
  return (
    <>
      <Navbar />

      <InfoSection />

      <ScrollAnimationContainer>
        <FirstSection />
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <SecondSection />
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <h1>훈수조</h1>
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <h1>현승이</h1>
      </ScrollAnimationContainer>
    </>
  );
};

export default Main;
