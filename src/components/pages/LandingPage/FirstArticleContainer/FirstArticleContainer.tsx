import { Variants } from 'framer-motion'
import ButtonAction from '../../../molecules/ButtonAction';
import PlatubiNOL from '../../../molecules/PlatubiNOL';
import { MainContent, InnerContainer, Title, BodyText, TextContent, ActionContent, ButtonsContainer } from './Styles'

export interface FirstArticleContainerProps {
  
}


const variants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 1.5 },
  })
}

const FirstArticleContainer: React.FC<FirstArticleContainerProps> = () => {
  return (
    <MainContent>
      <InnerContainer>
        <TextContent>
          <PlatubiNOL keyID="mobile" mobile />
          <Title variants={variants} custom={1} initial="hidden" animate="visible">
            Conozca segundo a segundo el valor de su billetera.
          </Title>
          <BodyText>
            Platubi es un servicio gratuito que calcula el valor de todo los activos que poseas (efectivo, otras divisas, cryptos) en tiempo real y te muestra todo el valor de tu billetera en la moneda que quieras, inclusive en pesos cotizados a valor de dolar blue.
          </BodyText>
        </TextContent>
        <ActionContent>
          <ButtonsContainer>
            <ButtonAction to="/register" text="Quiero abrir una cuenta!" />
            <ButtonAction to="/faq" text="Más información" ghost key="botonMasInfoMobile"/>
          </ButtonsContainer>
        </ActionContent>

      </InnerContainer>
    </MainContent>
  );
}
 
export default FirstArticleContainer;
