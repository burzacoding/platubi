import { useAuth } from "../../../contexts/AuthContext";
import AuthFrame from "../Auth/AuthFrame";
import { AuthContainer } from "../Auth/Styles";


export interface DashboardProps {
  
}
 
const Dashboard: React.FC<DashboardProps> = () => {
  const { currentUser } = useAuth()
  return (
    <AuthFrame>
    <AuthContainer>
      <h1>Bienvenido al dashboard de Platubi</h1>
      <h2>{currentUser.email}</h2>
    </AuthContainer>
    </AuthFrame>
  );
}
 
export default Dashboard;
