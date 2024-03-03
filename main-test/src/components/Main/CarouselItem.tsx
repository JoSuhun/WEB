import React, { useEffect, useState } from "react";

import { CarouselCard } from "../styles/Main/Carousel";

import MainSection from "./MainSection";

import bgimage from '../../assets/images/bg-image.jpg'
import bgimage2 from '../../assets/images/bg-image2.jpg'
import bgimage3 from '../../assets/images/bg-image3.jpg'

type Props = {
  type: string;
};

const CarouselItem = ({ type }: Props) => {
  return (
    <>
      {type === "1" ? (
        <CarouselCard bgimage={bgimage}>
          <MainSection />
        </CarouselCard>
      ) : type === "2" ? (
        <CarouselCard bgimage={bgimage2}/>
      ) : (
        <CarouselCard bgimage={bgimage3} />
      )}
    </>
  );
};

export default CarouselItem;
