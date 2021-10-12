import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h3>Med Amine Fh</h3>
        <div className="btns">
          <a
            target="_blank"
            rel="noreferer noopener"
            href="https://medaminefh.github.io/blogs"
            className="btn btn-outline-primary"
          >
            Blogs
          </a>
          <a
            target="_blank"
            rel="noreferer noopener"
            href="https://medaminefh.github.io/instag"
            className="btn btn-outline-secondary"
          >
            InstaClone
          </a>
        </div>
      </div>
      <footer className="text-secondary text-center">
        <ul className="social__media">
          <li>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/medaminefh"
              className="text-secondary"
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://twitter.com/medaminefh"
              className="text-secondary"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.linkedin.com/in/mohamed-amine-fhal"
              className="text-secondary"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <span>&copy;medaminefh</span>
      </footer>
    </div>
  );
};

export default Home;
