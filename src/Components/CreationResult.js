import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CreationResult({
  infoNewQuiz,
  questionsNewQuiz,
  levelsNewQuiz,
}) {
  const [postQuizData, setPostData] = useState(null);

  useEffect(() => {
    const body = {
      title: infoNewQuiz.title,
      image: infoNewQuiz.image,
      questions: [...questionsNewQuiz],
      levels: [...levelsNewQuiz],
    };
    axios
      .post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", body)
      .then((res) => {
        localStorage.setItem(`id ${res.data.id}`, `${res.data.id}`)
        setPostData(res.data)})
      .catch((err) => console.log(err.response.data));
  }, [infoNewQuiz, questionsNewQuiz, levelsNewQuiz]);

  if (postQuizData === null) {
    return <ResultStyle>Carregando...</ResultStyle>;
  }

  console.log(postQuizData)

  return (
    <ResultStyle>
      <h1>Seu quiz está pronto!</h1>
      <ResultContent>
        <img src={infoNewQuiz.image} alt="Quiz creation result" />
        <div>{infoNewQuiz.title}</div>
      </ResultContent>
      <Link to={`/Show-Quiz/${postQuizData.id}`}>
        <ShowQuizButton>Acessar Quiz</ShowQuizButton>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <HomeButton>Voltar pra home</HomeButton>
      </Link>
    </ResultStyle>
  );
}

const ResultStyle = styled.main`
  margin-top: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 23px;
    margin-bottom: 3vw;
  }
`;

const ShowQuizButton = styled.button`
  width: 15.3vw;
  height: 3.6vw;
  color: #ffffff;
  font-weight: 400;
  font-size: 21px;
  background-color: #ec362d;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  margin: 4vw 0 1vw 0;
`;

const ResultContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5vw;
  position: relative;

  img {
    width: 34.7 vw;
    max-height: 19vw;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 65.62%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      url(image.png);
    border-radius: 5px;
  }

  div {
    position: absolute;
    font-weight: 400;
    font-size: 19px;
    line-height: 22px;
    color: #ffffff;
    left: 1.3vw;
    bottom: 0.8vw;
  }
`;

const HomeButton = styled.div`
  width: 15.3vw;
  height: 3.1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #818181;
  font-size: 21px;
  margin-bottom: 6vw;
  cursor: pointer;
`;
