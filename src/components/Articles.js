import React, { useEffect, useState } from "react";
import { Title } from "./utils";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;

  gap: 2rem;
  padding: 2rem 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: ${(props) =>
    props.theme.bg ?? "linear-gradient(to right, #ffffff, #ece9e6)"};

  color: ${(props) => props.theme.text};
  & .card__footer {
    display: flex;
    padding: 1rem;
    margin-top: auto;
  }
  & .card__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    & h4 {
      font-size: 1.5rem;
      text-transform: capitalize;

      & a {
        transition: 0.3s ease;
        text-decoration: underline;
        color: inherit;
        &:hover {
          color: #1da1f2;
        }
      }
    }
  }
  & .user {
    display: flex;
    gap: 0.5rem;
  }

  & .user__image {
    max-width: 60px;
    height: auto;
    filter: contrast(120%);
    border-radius: 50%;
  }

  & .user__info > small {
    color: ${(props) => (props.theme.bg === "#064635" ? "#ccc" : "#041c32")};
  }

  & .reading_time {
    color: ${(props) => (props.theme.bg === "#064635" ? "#ccc" : "#041c32")};
    font-size: 0.75rem;
  }

  & .tag {
    align-self: flex-start;
    color: ${(props) => (props.theme.bg === "#064635" ? "#ccc" : "#041c32")};
    padding: 0.25em 0.75em;
    border-radius: 0.75rem;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 0.75rem;
  }
`;

const Img = styled.img`
  max-width: 600px;
  width: 100%;
  display: block;
  object-fit: cover;
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
            bg: article.cover_image,
            created_at: new Date(article.published_at).toLocaleDateString(
              "en-US",
              options
            ),
            reading_time: article.reading_time_minutes,
            tags: article.tags,
            url: article.url,
            user: article.user,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <Title>Recent Articles</Title>
      <Container>
        {articles &&
          articles.map((article) => (
            <Card key={article.id}>
              <div className="card__header">
                <Img
                  src={article.bg}
                  alt="card__image"
                  className="card__image"
                />
              </div>
              <div className="card__body">
                <span className="tag">{article.tags}</span>
                <h4>
                  <a
                    href={article.url}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {article.title}
                  </a>
                </h4>
                <span className="reading_time">
                  {article.reading_time} min Read
                </span>
              </div>
              <div className="card__footer">
                <div className="user">
                  <img
                    src={article.user.profile_image_90}
                    alt="user__image"
                    className="user__image"
                  />
                  <div className="user__info">
                    <h5>{article.user.username}</h5>
                    <small>{article.created_at}</small>
                  </div>
                </div>
              </div>
            </Card>
          ))}
      </Container>
    </section>
  );
}

export default Articles;
