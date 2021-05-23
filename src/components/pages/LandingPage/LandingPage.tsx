import FirstArticleContainer from "./FirstArticleContainer/FirstArticleContainer";
import { NavSpacer, LandingPageContainer, FirstArticle } from "./Styles";

export interface LandingPageProps {
  
}
 
const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <LandingPageContainer>
      <NavSpacer />
      <FirstArticle>
        {/* ACA VAN LAS DECORACIONES*/}
        <FirstArticleContainer /> {/* ESTE DIV SOLO ES EL MAIN CONTENT*/}
        {/* ACA VAN LAS DECORACIONES*/}
      </FirstArticle>

    </LandingPageContainer>
  );
}
 
export default LandingPage;
