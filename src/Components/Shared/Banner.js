import React from "react";
import { BannerStyle } from "./BannerStyle";
import { useWindowSize } from "./WindowSize";

const Banner = () => {
  const { height, width } = useWindowSize();
  return (
    <BannerStyle height={height} width={width}>
      Website Banner image and text should be here.
    </BannerStyle>
  );
};

export default Banner;
