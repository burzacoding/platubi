import DecoratorRight from "../../atoms/DecoratorRight";
import DecoratorSvg from "../../molecules/DecoratorSvg";
import Separador from "../../molecules/Separador";
import FirstArticleContainer from "./FirstArticleContainer/FirstArticleContainer";
import SecondArticleContainer from "./SecondArticleContainer/SecondArticleContainer";
import Footer from "../../molecules/Footer";
import { NavSpacer, LandingPageContainer, ArticleContainer } from "../../../elements/LandingPage";
import { useAuth } from "../../../contexts/AuthContext";
import Dashboard from "../Protected/Dashboard";


const LandingPage: React.FC = () => {
  const { currentUser } = useAuth()
  return (
    <>
    { currentUser ? (
      <Dashboard />
    ) : (
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
        <Footer />
        <NavSpacer bottom desktop/>
      </LandingPageContainer>
    )}
    </>
  );
}
 
export default LandingPage;
