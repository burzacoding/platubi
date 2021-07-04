import { Container, Card, Symbol, Numbers, SVGContainer } from '../../elements/Dashboard/CompositionCards'
import EditPencil from '../atoms/SVG/EditPencilSVG'
export interface CompositionChartsProps {
  
}
 
const CompositionCharts: React.FC<CompositionChartsProps> = () => {

  const Colors = ['#3480C1', '#0E4777', '#03A63C', '#006523']

  return (
    <Container>
      <Card cardColor={Colors[0]}>
        <Symbol>ARS</Symbol>
        <Numbers>$2500</Numbers>
        <Numbers>75%</Numbers>
      </Card>
      <Card cardColor={Colors[1]}>
        <Symbol>ARS</Symbol>
        <Numbers>$2500</Numbers>
        <Numbers>75%</Numbers>
      </Card>
      <Card cardColor={Colors[2]}>
        <Symbol>ARS</Symbol>
        <Numbers>$2500</Numbers>
        <Numbers>75%</Numbers>
      </Card>
      <Card cardColor={Colors[3]}>
        <Symbol>ARS</Symbol>
        <Numbers>$2500</Numbers>
        <Numbers>75%</Numbers>
      </Card>
    </Container>
  );
}
 
export default CompositionCharts;
