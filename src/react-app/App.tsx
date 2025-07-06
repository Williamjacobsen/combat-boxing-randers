import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Schedule from "./components/schedule/schedule";
import AboutUs from "./components/aboutus/aboutus";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div id="Træningstider">
        <Schedule />
      </div>
      <div id="OmOs">
        <AboutUs />
      </div>
    </>
  );
}

export default App;
