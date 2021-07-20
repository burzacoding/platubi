import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from './AppStyles'
import { AuthProvider } from './Contexts/AuthContext'
import { DashboardProvider } from './Contexts/DashboardContext'

import NavBar from "./components/molecules/NavBar/NavBar";
import LandingPage from './components/pages/LandingPage/LandingPage';
import LoginPage from './components/pages/Auth/LoginPage';
import RegIndex from './components/pages/Auth/Register/RegisterIndex';
import RecoverPage from './components/pages/Auth/RecoverPage';
import ContactoPage from './components/pages/Contacto';
import FAQPage from './components/pages/FAQ';
import PublicOnlyRoute from './routes/PublicOnlyRoute'
import { ModalProvider } from './Contexts/ModalContext'
import { ApiProvider } from './Contexts/ApiContext'




function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  if (theme === 'dark') {
    document.body.classList.remove('lightBody')
  }
  if (theme === 'light') {
    document.body.classList.add('lightBody')
  }
  useEffect(() => {
    document.body.classList.add('transition')
}, [])

  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
      <AuthProvider>
      <ApiProvider>
      <DashboardProvider>
      <ModalProvider>
        <NavBar setTheme={setTheme} theme={theme} />
        <Switch>
          <PublicOnlyRoute path="/registrarse" component={RegIndex} />
          <PublicOnlyRoute path="/recover" component={RecoverPage} />
          <PublicOnlyRoute path="/login" component={LoginPage} />
          <Route path="/contacto" component={ContactoPage} />
          <Route path="/faq" component={FAQPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </ModalProvider>
      </DashboardProvider>
      </ApiProvider>
      </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
