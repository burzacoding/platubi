import * as React from 'react';
import { useEffect } from 'react'
import blob from '../../../res/Landing/blob-dark-desktop.png'
import '../../../css/LandingPage/LandingPageRightContent.css'

export interface LandingPageOneRightContentProps {
  
}
 
const LandingPageOneRightContent: React.FC<LandingPageOneRightContentProps> = () => {
  useEffect(() => {
    const landingBlob = document.getElementById("blob");
    if (landingBlob) landingBlob.classList.add("t1s-opacity", "show");
  }, [])
  return (
    <div className="right-deco-cont center">
      <img className="blob" src={blob} alt="blob" id="blob"/>
    </div>
  );
}
 
export default LandingPageOneRightContent;
