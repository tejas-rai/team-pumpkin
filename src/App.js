import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import '../src/styles/styles.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/about-us">
          <div>
            <Navbar/>
          <AboutUs/>
          <Footer/></div>
        </Route>
        <Route path="/timeline">
          <Timeline />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
