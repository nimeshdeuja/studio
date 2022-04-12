import { useState, useLayoutEffect } from "react";

export const useWindowSize = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  useLayoutEffect(() => {
    const updateSize = () => {
      let innerHeight = window.innerHeight;
      let innerWidth = window.innerWidth;
      setHeight(innerHeight);
      setWidth(innerWidth);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return { height, width };
};
