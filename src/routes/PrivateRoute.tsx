import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

 
const PrivateRoute: React.FC<RouteProps> = ({...routeProps}) => {
  const { currentUser } = useAuth()
  return currentUser ? <Route {...routeProps} /> : <Redirect to="/login" />
}
 
export default PrivateRoute;
