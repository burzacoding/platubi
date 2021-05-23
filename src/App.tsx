import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from './AppStyles'

import NavBar from "./components/molecules/NavBar/NavBar";
import LandingPage from './components/pages/LandingPage/LandingPage';
// import LandingPageOne from "./components/templates/LandingPageOne";
// import LandingPageThree from "./components/templates/LandingPageThree";
// import LandingPageTwo from "./components/templates/LandingPageTwo";
// import Footer from "./components/molecules/Footer";




function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
        <NavBar setTheme={setTheme} theme={theme} />
        <LandingPage />
        {/* <LandingPageOne theme={theme} />
        <LandingPageTwo theme={theme} />
        <LandingPageThree theme={theme} />
        <Footer theme={theme} /> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
