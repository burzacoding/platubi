import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useDashboard } from "../../../contexts/DashboardContext";
import { Frame } from "../../../elements/Dashboard";
import { AuthContainer } from "../Auth/Styles";


 
const Dashboard: React.FC = () => {
  const { currentUser } = useAuth()
  const { page, setPage } = useDashboard()

  useEffect(() => {

  }, [])

  return (
      <Frame>
      <AuthContainer>
        <h1>Bienvenido al dashboard de Platubi</h1>
        <h2>{currentUser.email}</h2>
        <p>{page}</p>
        <button onClick={() => {
          setPage((prev: any) => prev + 1)
        }}>Aumentar page</button>
      </AuthContainer>
      </Frame>
  );
}
 
export default Dashboard;
