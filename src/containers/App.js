import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./home/home";
import Contact from "../components/contact/contact";
import Navbar from "../components/navbar/navbar";
import Proyects from "../components/proyects/proyects";

function App() {
  return (
    <Router>
      <Route path="/">
        {" "}
        <Navbar />
      </Route>
      <Route exact path="/">
        {" "}
        <Home />
      </Route>
      <Route path="/Contact">
        {" "}
        <Contact />
      </Route>
      <Route path="/Proyects">
        {" "}
        <Proyects />
      </Route>
    </Router>
  );
}

export default App;
