import { RouteProps, Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";



const PublicOnlyRoute: React.FC<RouteProps> = ({...routeProps}) => {
  const { currentUser } = useAuth()
  return !currentUser ? <Route {...routeProps} /> : <Redirect to="/dashboard" />
}
 
export default PublicOnlyRoute;
