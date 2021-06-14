import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useDashboard } from "../../../contexts/DashboardContext";
import { Frame } from "../../../elements/Dashboard";


 
const Dashboard: React.FC = () => {
  const { currentUser } = useAuth()
  const { page, setPage } = useDashboard()

  useEffect(() => {

  }, [])

  return (
      <Frame>
        <h1>Bienvenido al dashboard de Platubi</h1>
        <h2>{currentUser.email}</h2>
      </Frame>
  );
}
 
export default Dashboard;
