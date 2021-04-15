import "./App.css";
import Nav from "./components/Nav";
import React, { Component, useEffect, useState } from "react";
import Home from "./Pages/Home";
import Alexander from "./Pages/Alexander";
import Oliver from "./Pages/Oliver";
import Basiru from "./Pages/Basiru";
import Abdul from "./Pages/Abdul";
import Daniyal from "./Pages/Daniyal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Link path="/" component={Home} exact></Link>
          <Link path="/Alexander" component={Alexander}>
            Alexander
          </Link>
          <Link path="/Basiru" componet={Basiru}>
            Basiru
          </Link>
          <Link path="/Daniyal" component={Daniyal}>
            Daniyal
          </Link>
          <Link path="/Abdul" componet={Abdul}>
            Abdul
          </Link>
          <Link path="/Oliver" component={Oliver}>
            Oliver
          </Link>
        </Switch>

        {/* <Alexander /> */}
      </Router>
    </div>
  );
}

export default App;
