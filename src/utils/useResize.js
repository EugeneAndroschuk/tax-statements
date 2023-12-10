import { useState, useEffect } from "react";

const SCREEN_PHONE = 320;
const SCREEN_TABLET = 768;
const SCREEN_DESKTOP = 1280;


export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenPhone: width >= SCREEN_PHONE && width < SCREEN_TABLET,
    isScreenTablet: width >= SCREEN_TABLET && width < SCREEN_DESKTOP,
    isScreenDesktop: width >= SCREEN_DESKTOP,
  };
};
