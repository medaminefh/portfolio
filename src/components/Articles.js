import React, { useEffect, useState } from "react";
import { Title } from "./utils";
import styled from "styled-components";

const TimeLine = styled.div`
  ul.timeline {
    list-style-type: none;
    position: relative;
    padding-left: 1.5rem;
  }

  ul.timeline:before {
    content: " ";
    background: #333;
    display: inline-block;
    position: absolute;
    left: -36px;
    width: 6px;
    height: 100%;
    z-index: 2;
    border-radius: 1rem;
  }

  li.timeline-item {
    margin: 20px 0;
    padding: 1.5em;
  }

  li.timeline-item::before {
    content: " ";
    background: #4584b6;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid #fff;
    left: -50px;
    width: 36px;
    height: 36px;
    z-index: 3;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=medaminefh")
      .then((res) => res.json())
      .then((data) => {
        const options = { year: "numeric", month: "short", day: "numeric" };

        setArticles(
          data.map((article) => ({
            id: article.id,
            title: article.title,
            created_at: new Date(article.published_at).toLocaleDateString(
              "en-US",
              options
            ),
            url: article.url,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Title>Recent Articles</Title>
      <TimeLine className="container py-5">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <ul className="timeline">
              {articles.map((article) => (
                <li key={article.id} className="timeline-item">
                  <a
                    rel="noreferrer noopener"
                    target="_blank"
                    href={article.url}
                    className="h5 d-block mb-2"
                  >
                    {article.title}
                  </a>
                  <span className="small text-gray ">
                    <i className="fa fa-clock-o me-1 "></i>
                    {article.created_at}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TimeLine>
    </section>
  );
}

export default Articles;
