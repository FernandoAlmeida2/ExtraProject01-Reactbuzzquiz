import styled from "styled-components";
import CreateQuestionItem from "./CreateQuestionItem";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function CreateQuestions({
  questionsNewQuiz,
  setQuestions,
  nQuestions,
}) {
  const [indexOpened, setIndexOpened] = useState(0);
  const questionsComponent = [];
  const navigate = useNavigate();

  function cleanEmptyAnswers(){
    const newArray = [...questionsNewQuiz];
    newArray.forEach((question) => {
      let q2Empty = false;
      let q3Empty = false;
      if(question.answers[3].text === "" || question.answers[3].image === "")
        q3Empty = true;
      if(question.answers[2].text === "" || question.answers[2].image === "")
        q2Empty = true;
      q3Empty && question.answers.pop();
      q2Empty && question.answers.pop();
    })
    setQuestions(newArray);
  }
  
  function proceed(e) {
    e.preventDefault();
    cleanEmptyAnswers();
    navigate("/Create-Quiz-Levels");
  }


  for (let i = 0; i < nQuestions; i++) {
    questionsComponent.push(
      <CreateQuestionItem
        key={i}
        index={i}
        isOpened={i === indexOpened}
        setIndexOpened={setIndexOpened}
        questionsNewQuiz={questionsNewQuiz}
        setQuestions={setQuestions}
      />
    );
  }
  return (
    <QuestionsStyle>
      <h1>Crie suas perguntas</h1>
      <form onSubmit={proceed}>
        {questionsComponent}
        <SubmitButton type="submit">Prosseguir pra criar níveis</SubmitButton>
      </form>
    </QuestionsStyle>
  );
}

const QuestionsStyle = styled.main`
  margin-top: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 23px;
    margin-bottom: 1.8vw;
  }
`;

const SubmitButton = styled.button`
  width: 25.6vw;
  height: 3.75vw;
  color: #ffffff;
  font-weight: 400;
  font-size: 21px;
  background-color: #ec362d;
  border-radius: 15px;
  border: none;
`;
