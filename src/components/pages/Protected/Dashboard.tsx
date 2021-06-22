// import { useDashboard } from "../../../contexts/DashboardContext";
import { Container, Frame } from "../../../elements/Dashboard";
import Registers from "../../Templates/Registers";
import WealthViewer from "../../molecules/WealthViewer";
import TrackedStocks from "../../Templates/TrackedStocks";
import WealthTrackedSymbols from "../../Templates/WealthTrackedSymbols";
import LeftNav from "../../Templates/LeftNav";

 
const Dashboard: React.FC = () => {
  // const { page, setPage, userData, setUserData } = useDashboard()
  const withAds = () => 'false'
  return (
    <Container>
      <LeftNav />
      <Frame withAds={withAds()}>
        <WealthViewer />
        <Registers />
        <WealthTrackedSymbols />
        <TrackedStocks  />
      </Frame>
    </Container>
  );
}
 
export default Dashboard;

