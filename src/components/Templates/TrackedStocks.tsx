import { Container } from '../../elements/Dashboard/TrackedStocks'
import { useTrackedStocks } from '../../Hooks/dashboardLogic/useTrackedStocks';
import TrackedStocksCard from '../molecules/TrackedStocksCard';


//REMOVE THE 'OPTIONAL' ATTRIBUTE FROM THE BELOW PROP

const TrackedStocks: React.FC = () => {
  const data = useTrackedStocks()
  return (
    <Container>
      <TrackedStocksCard trackedStock={data[0]} />
      <TrackedStocksCard trackedStock={data[1]} />
      <TrackedStocksCard trackedStock={data[2]} />
      <TrackedStocksCard trackedStock={data[3]} />
      <TrackedStocksCard trackedStock={data[4]} />
      <TrackedStocksCard trackedStock={data[5]} />
    </Container>
  );
}
 
export default TrackedStocks;
