import Footer from "./components/molecules/Footer";
import NavBar from "./components/molecules/NavBar";
import LandingPageOne from "./components/templates/LandingPageOne";
import LandingPageThree from "./components/templates/LandingPageThree";
import LandingPageTwo from "./components/templates/LandingPageTwo";

function App() {
  return (
    <div className="App">
      {/* <div className="filler"></div> */}
      <NavBar theme="dark" />
      <LandingPageOne theme="dark" />
      <LandingPageTwo theme="dark" />
      <LandingPageThree theme="dark" />
      <Footer theme="dark" />
      {/* <h1>HOLA PLATUBI</h1> */}
    </div>
  );
}

export default App;
