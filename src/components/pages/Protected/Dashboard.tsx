// import { useDashboard } from "../../../contexts/DashboardContext";
import { Frame } from "../../../elements/Dashboard";
import Registers from "../../Templates/Registers";


 
const Dashboard: React.FC = () => {
  // const { page, setPage, userData, setUserData } = useDashboard()

  return (
      <Frame>
        <h1>Bienvenido al dashboard de Platubi</h1>
        <Registers />
      </Frame>
  );
}
 
export default Dashboard;

