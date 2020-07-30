import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
      <nav className="navbar navbar-light" style="background-color: #e3f2fd;">
      <ul className="nav justify-content-end">
  <li className="nav-item">
    <Link to="/home" className="nav-link active">Home</Link>
  </li>
  <li className="nav-item">
    <Link to="/recipes" className="nav-link">Recipes</Link>
  </li>
  <li className="nav-item">
    <Link to="/subscribe" className="nav-link">Subscribe</Link>
  </li>
  <li className="nav-item">
    <Link to="/contact" className="nav-link disabled" tabindex="-1" aria-disabled="true">Contact Erica</Link>
  </li>
</ul>
      </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* <Route path="/users">
            <Users />
          </Route> */}
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}



