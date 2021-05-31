import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from './AppStyles'

import NavBar from "./components/molecules/NavBar/NavBar";
import LandingPage from './components/pages/LandingPage/LandingPage';
import LoginPage from './components/pages/Auth/LoginPage';
import RegIndex from './components/pages/Auth/Register/RegisterIndex';
import RecoverPage from './components/pages/Auth/RecoverPage';
// import LandingPageThree from "./components/templates/LandingPageThree";
// import LandingPageTwo from "./components/templates/LandingPageTwo";
// import Footer from "./components/molecules/Footer";




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
        <NavBar setTheme={setTheme} theme={theme} />

        <Switch>
          <Route path="/recover" component={RecoverPage} />
          <Route path="/registrarse" component={RegIndex} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
