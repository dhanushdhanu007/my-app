import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <ul className="header">
              <li><NavLink exact to="/"> Home</NavLink></li>
              <li><NavLink to="/about"> About</NavLink></li>
              <li><NavLink to="/contact"> Contact</NavLink></li>
            </ul>
            <h1>ReactAssignment</h1>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </div>
            <div class="footer">
            <p>India</p>
          </div>
          </div>
        </HashRouter>
      );
    }
  }

  export default Main;