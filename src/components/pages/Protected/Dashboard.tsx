import AuthFrame from "../Auth/AuthFrame";
import { AuthContainer } from "../Auth/Styles";


export interface DashboardProps {
  
}
 
const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <AuthFrame>
    <AuthContainer>
      <h1>Bienvenido al dashboard de Platubi</h1>
    </AuthContainer>
    </AuthFrame>
  );
}
 
export default Dashboard;
