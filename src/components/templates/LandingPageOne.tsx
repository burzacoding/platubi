import * as React from 'react';
import '../../css/LandingPage/LandingPageOne.css'
import LandingPageOneLeftContent from '../molecules/LandingPage/LandingPageOneLeftContent';
import LandingPageOneRightContent from '../molecules/LandingPage/LandingPageOneRightContent';

export interface LandingPageOneProps {
  theme: "dark" | "light"
}
 
const LandingPageOne: React.FC<LandingPageOneProps> = ({theme}) => {
  let classBaseColor = "base-dark"
  if (theme === 'light') {
    classBaseColor = "base-light"
  }
  return (
    <article className={`first-page-container ${classBaseColor}`}>
      <div className="first-main-container">
        <LandingPageOneLeftContent theme={theme} />
        <LandingPageOneRightContent />
      </div>
    </article>
  );
}
 
export default LandingPageOne;
