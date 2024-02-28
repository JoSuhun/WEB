import React from "react";

import { InfoBox, Profile } from "../../styles/Main/MainStyle";

type Props = {};

const InfoSection = (props: Props) => {
  const profile = require("../../static/images/sample.JPG");
  return (
    <>
      <InfoBox>
        <Profile imageurl={profile} />
      </InfoBox>
    </>
  );
};

export default InfoSection;
