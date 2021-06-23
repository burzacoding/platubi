import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext';

 
const PrivateRoute: React.FC<RouteProps> = ({...routeProps}) => {
  const { currentUser } = useAuth()
  return currentUser ? <Route {...routeProps} /> : <Redirect to="/login" />
}
 
export default PrivateRoute;
