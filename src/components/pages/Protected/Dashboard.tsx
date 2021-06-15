import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useDashboard } from "../../../contexts/DashboardContext";
import { Frame } from "../../../elements/Dashboard";
import { db } from "../../../firebase/Firebase";


 
const Dashboard: React.FC = () => {
  const { currentUser } = useAuth()
  const { page, setPage } = useDashboard()
  const [userData, setUserData] = useState({
    wealthViewSymbols: ["", "", ""],
    wealthTrackedSymbols: ["", "", "", ""],
    registers: [
      {
        operation: 'add',
        symbol: 'ARS',
        value: 10000,
        date: '12-1-2021 13:48',
        favorite: true,
        show: true
      }
    ],
    trackedStocks: ["", "", "", "", "", ""]
  })

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
