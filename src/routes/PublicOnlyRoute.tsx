import { RouteProps, Route, Redirect } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";



const PublicOnlyRoute: React.FC<RouteProps> = ({...routeProps}) => {
  const { currentUser } = useAuth()
  return !currentUser ? <Route {...routeProps} /> : <Redirect to="/" />
}
 
export default PublicOnlyRoute;
