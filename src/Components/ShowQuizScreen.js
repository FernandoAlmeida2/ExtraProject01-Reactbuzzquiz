import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";
import QuizResult from "./QuizResult";
let sortFlag = false;
function comparator() {
  return Math.random() - 0.5;
}

export default function ShowQuizScreen() {
  const { idQuiz } = useParams();
  const [quizData, setQuizData] = useState(null);
  const [arrayClicked, setArrayClicked] = useState([]);
  const [finishedQuiz, setFinishedQuiz] = useState(false);
  const [hitsCounter, setHitsCounter] = useState(0);
  useEffect(() => {
    axios
      .get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${idQuiz}`)
      .then((res) => setQuizData(res.data))
      .catch((err) => console.log(err.response.data));
  }, [idQuiz]);

  if (quizData === null) {
    return <QuizStyle>Carregando...</QuizStyle>;
  }

  if (!sortFlag) {
    quizData.questions.forEach((question) => question.answers.sort(comparator));
    sortFlag = true;
  }

  function addClicked(index) {
    setArrayClicked([...arrayClicked, index]);
    if (arrayClicked.length === quizData.questions.length - 1) {
      setFinishedQuiz(true);
    }
  }

  function doIScrollIt(index) {
    if (index === 0) return true;
    //if (index === quizData.questions.length - 1) return false;
    //if(index < arrayClicked.length - 1) return false;
    if (arrayClicked.filter((el) => el === index - 1).length === 1) return true;
    return false;
  }

  function addHitAnswer() {
    setHitsCounter(hitsCounter + 1);
  }

  return (
    <QuizStyle>
      <TitleStyle>
        <img src={quizData.image} alt="Título do Quiz" />
        <div>
          <h1>{quizData.title}</h1>
        </div>
      </TitleStyle>
      {quizData.questions.map((question, i) => (
        <Question
          key={i}
          question={question}
          index={i}
          addClicked={addClicked}
          doIScrollIt={doIScrollIt}
          addHitAnswer={addHitAnswer}
        />
      ))}
      {finishedQuiz && (
        <QuizResult
          hitsPercentage={Math.round(
            (100 * hitsCounter) / quizData.questions.length
          )}
          levels={quizData.levels}
        />
      )}
    </QuizStyle>
  );
}

const QuizStyle = styled.main`
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vw;
`;

const TitleStyle = styled.div`
  position: relative;

  img {
    width: 100vw;
    height: 15.8vw;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)),
      url(image.png);
  }

  div {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 15.8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: #ffffff;
      font-size: 39px;
      font-weight: 400;
    }
  }
`;
