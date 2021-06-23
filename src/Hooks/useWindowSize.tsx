import { useState, useEffect } from "react";

const getWidth = () => window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const getHeight = () => window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

export function useWindowSize () {
  const [width, setWidth] = useState(getWidth())
  const [height, setHeight] = useState(getHeight())

  useEffect(() => {
    let timeoutId: any;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {setWidth(getWidth()); setHeight(getHeight())}, 200);
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])
  return {width, height}
}
