import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from './AppStyles'
import { AuthProvider } from './contexts/AuthContext'
import { DashboardProvider } from './contexts/DashboardContext'

import NavBar from "./components/molecules/NavBar/NavBar";
import LandingPage from './components/pages/LandingPage/LandingPage';
import LoginPage from './components/pages/Auth/LoginPage';
import RegIndex from './components/pages/Auth/Register/RegisterIndex';
import RecoverPage from './components/pages/Auth/RecoverPage';
import ContactoPage from './components/pages/Contacto';
import FAQPage from './components/pages/FAQ';
import Dashboard from './components/pages/Protected/Dashboard';
import PrivateRoute from './routes/PrivateRoute'
import PublicOnlyRoute from './routes/PublicOnlyRoute'




function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  if (theme === 'dark') {
    document.body.classList.remove('lightBody')
  }
  if (theme === 'light') {
    document.body.classList.add('lightBody')
  }
  useEffect(() => {document.body.classList.add('transition')}, [])

  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
      <AuthProvider>
      <DashboardProvider>
        <NavBar setTheme={setTheme} theme={theme} />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PublicOnlyRoute path="/registrarse" component={RegIndex} />
          <PublicOnlyRoute path="/recover" component={RecoverPage} />
          <PublicOnlyRoute path="/login" component={LoginPage} />
          <Route path="/contacto" component={ContactoPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </DashboardProvider>
      </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
