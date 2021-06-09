import { MainContent, P, Title } from "../../elements/FAQ";
import { ArticleContainer, LandingPageContainer } from "../../elements/LandingPage";

export interface FAQPageProps {
  
}
 
const FAQPage: React.FC<FAQPageProps> = () => {
  return (
    <LandingPageContainer>
      <ArticleContainer>
        <MainContent>
          <Title>FAQ</Title>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam et quae blanditiis, labore sed dolorum numquam sunt minima perspiciatis est dicta, voluptatum ut quia molestiae consequatur accusantium architecto necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quos nisi repellendus corporis, modi eaque omnis quo dolorum praesentium? Vel aperiam fuga dolores et quam incidunt placeat tempore, possimus error.</P>
          <Title id="tyc">Términos y condiciones.</Title>
        </MainContent>
      </ArticleContainer>
    </LandingPageContainer>
  );
}
 
export default FAQPage;
