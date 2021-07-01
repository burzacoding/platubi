import { Card, Title, Body } from '../../elements/Dashboard/TrackedStocks'
import GearSVG from '../atoms/SVG/Gear'

export interface TrackedStocksCardProps {
  trackedStock: {
    symbol: string,
    symbolAndValue: string,
    change: number
  }
}
 
const TrackedStocksCard: React.FC<TrackedStocksCardProps> = ({trackedStock}) => {
  const { symbol, symbolAndValue, change } = trackedStock
  const isNegative = change < 0 ? 'true' : 'false'
  const formattedChange = change >= 0 ? `%${change}` : `-%${Math.abs(change)}`

  return (
    <Card isNegative={isNegative}>
      <Title>{symbol}</Title>
      <Body>{symbolAndValue}</Body>
      <Body>{formattedChange}</Body>
      <GearSVG />
    </Card>
  );
}
 
export default TrackedStocksCard;
