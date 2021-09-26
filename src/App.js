import React from "react";
import SvgBg from "./Background/backgroundAnimation"
import "./App.css";

function App() {
  return (
    <>
    <SvgBg />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="content">
              <h1>Coming Soon!</h1>
            </div>
          </div>
        </div>
      </div>
      <ul className="social__media">
      <li>
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://github.com/medaminefh"
          
        >
          <i className="fa fa-github"></i>
        </a>
      </li>
      <li>
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://twitter.com/medaminefh"
          
        >
          <i className="fa fa-twitter"></i>
        </a>
      </li>
      <li>
        <a
          rel="noreferrer noopener"
          target="_blank"
          href="https://www.linkedin.com/in/mohamed-amine-fhal"
          
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </li>
    </ul>
    </>
  );
}

export default App;
