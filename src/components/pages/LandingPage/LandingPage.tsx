import DecoratorRight from "../../atoms/DecoratorRight";
import DecoratorSvg from "../../molecules/DecoratorSvg";
import Separador from "../../molecules/Separador";
import FirstArticleContainer from "./FirstArticleContainer/FirstArticleContainer";
import { NavSpacer, LandingPageContainer, FirstArticle } from "./Styles";

export interface LandingPageProps {
  
}
 
const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <LandingPageContainer>
      <NavSpacer />
      <FirstArticle>
        <DecoratorSvg keyID="top" position="top"  />
        <FirstArticleContainer />
        <DecoratorSvg keyID="bottom" position="bottom" />
        <Separador position="bottom" keyID="first" />
        <DecoratorRight KeyID="first" />
      </FirstArticle>
      <NavSpacer bottom />
    </LandingPageContainer>
  );
}
 
export default LandingPage;
