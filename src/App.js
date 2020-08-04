import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
// import Title from "./Components/Title";
import Recipes from './Components/Recipes';
import Subscribe from './Components/Subscribe';


export default function App() {
  return (
    

    
    <Router>
  
      <div>
        {/* style="background-color: #e3f2fd; */}
      <nav className="navbar justify-content-end">
      <ul className="nav">
  <li className="nav-item">
    <Link to="/home" className="nav-link active">Home</Link>
  </li>
  <li className="nav-item">
    <Link to="/recipes" className="nav-link">Recipes</Link>
  </li>
  <li className="nav-item">
    <Link to="/subscribe" className="nav-link">Subscribe</Link>
  </li>
  {/* <li className="nav-item">
    <Link to="/contact" className="nav-link disabled" tabindex="-1" aria-disabled="true">Contact Erica</Link>
  </li> */}
</ul>
      </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/subscribe">
            <Subscribe />
          </Route>
        </Switch>
      </div>
    </Router>
    

    
  );
  
}


  
