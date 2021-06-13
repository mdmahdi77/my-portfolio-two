import NavMenu from './components/NavMenu';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <NavMenu></NavMenu>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Project />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
