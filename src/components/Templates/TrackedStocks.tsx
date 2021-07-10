import { Container } from '../../elements/Dashboard/TrackedStocks'
import { useTrackedStocks } from '../../Hooks/dashboardLogic/useTrackedStocks';
import TrackedStocksCard from '../molecules/TrackedStocksCard';


//REMOVE THE 'OPTIONAL' ATTRIBUTE FROM THE BELOW PROP

export interface TrackedStocksProps {
  trackedStocks?:object[]
}
 
const TrackedStocks: React.FC<TrackedStocksProps> = ({trackedStocks}) => {

  const data = useTrackedStocks()

  return (
    <Container>
      {/* <TrackedStocksCard /> */}
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
