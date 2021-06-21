import { Container } from '../../elements/Dashboard/TrackedStocks'
import TrackedStocksCard from '../molecules/TrackedStocksCard';


//REMOVE THE 'OPTIONAL' ATTRIBUTE FROM THE BELOW PROP

export interface TrackedStocksProps {
  trackedStocks?:object[]
}
 
const TrackedStocks: React.FC<TrackedStocksProps> = ({trackedStocks}) => {



  return (
    <Container>
      {/* <TrackedStocksCard /> */}
      <TrackedStocksCard trackedStock={{symbol: 'Dólar BLUE', change: 20, symbolAndValue: 'ARS 165' }} />
      <TrackedStocksCard trackedStock={{symbol: 'Dogecoin', change: -5, symbolAndValue: 'USD 0.3323' }} />
      <TrackedStocksCard trackedStock={{symbol: 'Bitcoin', change: 2.25, symbolAndValue: 'USD 38544' }} />
      <TrackedStocksCard trackedStock={{symbol: 'Dólar BLUE', change: 20, symbolAndValue: 'ARS 165' }} />
      <TrackedStocksCard trackedStock={{symbol: 'Dogecoin', change: -5, symbolAndValue: 'USD 0.3323' }} />
      <TrackedStocksCard trackedStock={{symbol: 'Bitcoin', change: 2.25, symbolAndValue: 'USD 38544' }} />
    </Container>
  );
}
 
export default TrackedStocks;
