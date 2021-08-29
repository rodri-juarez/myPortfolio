import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './home/home'

function App() {
  return (
    <Router>

    <Route path="/"> <Home /></Route>
    </Router>
  );
}

export default App;
