import React, { useState, useEffect } from "react";
import "./App.css";
import {
  NotMatch,
  Contact,
  About,
  Nav,
  Header,
  Projects,
  Devices,
} from "./Components";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [show, setShow] = useState("");

  useEffect(() => {
    window.outerWidth <= 1100 ? setShow(true) : setShow(false);
    window.addEventListener("resize", (e) => {
      e.target.outerWidth <= 1100 ? setShow(true) : setShow(false);
    });
  }, [show]);
  return (
    <Router>
      <div className="App">
        {!show ? <Nav /> : <Devices />}
        <Switch>
          <Route exact path="/" render={(props) => <Header {...props} />} />
          <Redirect from="/Home" to="/" />
          <Route path="/Projects" render={(props) => <Projects {...props} />} />
          <Route path="/About" render={(props) => <About {...props} />} />
          <Route path="/Contact" render={(props) => <Contact {...props} />} />
          <Route path="*" render={NotMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
