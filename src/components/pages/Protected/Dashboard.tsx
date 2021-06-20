// import { useDashboard } from "../../../contexts/DashboardContext";
import { Frame } from "../../../elements/Dashboard";
import Registers from "../../Templates/Registers";
import WealthViewer from "../../molecules/WealthViewer";

 
const Dashboard: React.FC = () => {
  // const { page, setPage, userData, setUserData } = useDashboard()

  return (
      <Frame>
        <WealthViewer />
        <Registers />
      </Frame>
  );
}
 
export default Dashboard;

