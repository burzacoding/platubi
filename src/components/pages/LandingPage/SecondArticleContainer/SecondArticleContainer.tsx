import { ImgCont, Item, MainContent, Text } from "./Styles";
import item1 from '../../../../res/Landing/calcu.svg'
import item2 from '../../../../res/Landing/donut.svg'
import item3 from '../../../../res/Landing/linea-chart.svg'

export interface SecondArticleContainerProps {
  
}
 
const SecondArticleContainer: React.FC<SecondArticleContainerProps> = () => {
  return (
    <MainContent>
      <Item>
        <ImgCont>
          <img src={item1} alt="" />
        </ImgCont>
        <Text>No más cálculos, nosotros te ahorramos el tiempo y te mostramos lo que más te interesa.</Text>
      </Item>
      <Item>
        <ImgCont>
          <img src={item2} alt="" />
        </ImgCont>
        <Text>Conozca que compone su billetera y en que porcentaje de un solo vistazo.</Text>
      </Item>
      <Item>
        <ImgCont>
          <img src={item3} alt="" />
        </ImgCont>
        <Text>Platubi siempre esta conectado a los mercados, así que te muestra el valor de tus criptos en tiempo real.</Text>
      </Item>
    </MainContent>
  );
}
 
export default SecondArticleContainer;
