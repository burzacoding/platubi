import { Container, Card, Symbol, Numbers, SymbolsName } from '../../elements/Dashboard/CompositionCards'
import { useCompositionCards } from '../../Hooks/dashboardLogic/useCompositionCard';
export interface CompositionChartsProps {
  
}
 
const Colors = ['#3480C1', '#0E4777', '#03A63C', '#006523']


const CompositionCharts: React.FC<CompositionChartsProps> = () => {

  const [first, second, third, fourth] = useCompositionCards()
  

  return (
    <Container>
      <Card cardColor={Colors[0]}>
        <Symbol>{first.symbol}</Symbol>
        <SymbolsName>{first.name}</SymbolsName>
        <Numbers>{first.value}</Numbers>
        <Numbers>{first.percentage}%</Numbers>
      </Card>
      <Card cardColor={Colors[1]}>
        <Symbol>{second.symbol}</Symbol>
        <SymbolsName>{second.name}</SymbolsName>
        <Numbers>{second.value}</Numbers>
        <Numbers>{second.percentage}%</Numbers>
      </Card>
      <Card cardColor={Colors[2]}>
        <Symbol>{third.symbol}</Symbol>
        <SymbolsName>{third.name}</SymbolsName>
        <Numbers>{third.value}</Numbers>
        <Numbers>{third.percentage}%</Numbers>
      </Card>
      <Card cardColor={Colors[3]}>
        <Symbol>{fourth.symbol}</Symbol>
        <SymbolsName>{fourth.name}</SymbolsName>
        <Numbers>{fourth.value}</Numbers>
        <Numbers>{fourth.percentage}%</Numbers>
      </Card>
    </Container>
  );
}
 
export default CompositionCharts;
