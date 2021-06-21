// import { useDashboard } from "../../../contexts/DashboardContext";
import { Frame } from "../../../elements/Dashboard";
import Registers from "../../Templates/Registers";
import WealthViewer from "../../molecules/WealthViewer";
import TrackedStocks from "../../Templates/TrackedStocks";
import WealthTrackedSymbols from "../../Templates/WealthTrackedSymbols";

 
const Dashboard: React.FC = () => {
  // const { page, setPage, userData, setUserData } = useDashboard()
  const withAds = () => 'false'
  return (
      <Frame withAds={withAds()}>
        <WealthViewer />
        <Registers />
        <WealthTrackedSymbols />
        <TrackedStocks  />
      </Frame>
  );
}
 
export default Dashboard;

