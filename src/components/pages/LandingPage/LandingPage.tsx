import DecoratorRight from "../../atoms/DecoratorRight";
import DecoratorSvg from "../../molecules/DecoratorSvg";
import Separador from "../../molecules/Separador";
import FirstArticleContainer from "./FirstArticleContainer/FirstArticleContainer";
import SecondArticleContainer from "./SecondArticleContainer/SecondArticleContainer";
import { NavSpacer, LandingPageContainer, ArticleContainer } from "../../../elements/LandingPage";

export interface LandingPageProps {
  
}
 
const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <LandingPageContainer>
      <NavSpacer desktop/>
      <ArticleContainer>
        <DecoratorSvg keyID="top" position="top"  />
        <FirstArticleContainer />
        <DecoratorSvg keyID="bottom" position="bottom" />
        <Separador position="bottom" keyID="first" />
        <DecoratorRight KeyID="first" />
      </ArticleContainer>
      <ArticleContainer>
        <SecondArticleContainer />
      </ArticleContainer>
      <NavSpacer bottom />
    </LandingPageContainer>
  );
}
 
export default LandingPage;
