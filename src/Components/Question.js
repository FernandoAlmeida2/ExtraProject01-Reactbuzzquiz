import styled from "styled-components";
import Answer from "./Answer";
import { useState, useRef } from "react";


export default function Question({
  question,
  index,
  addClicked,
  doIScrollIt,
  addHitAnswer,
}) {
  const [isClicked, setClicked] = useState(false);
  const questionRef = useRef();
  function userClicked(index) {
    setClicked(true);
    addClicked(index);
  }

  if (doIScrollIt(index) && !isClicked) {
    setTimeout(
      () => questionRef.current.scrollIntoView({ behavior: "smooth" }),
      2000
    );
  }
  return (
    <QuestionStyle ref={questionRef}>
      <TitleStyle background={question.color}>
        <h1>{question.title}</h1>
      </TitleStyle>
      <AnswersStyle>
        {question.answers.map((answer, i) => (
          <Answer
            key={i}
            answer={answer}
            isClicked={isClicked}
            userClicked={userClicked}
            index={index}
            addHitAnswer={addHitAnswer}
          />
        ))}
      </AnswersStyle>
    </QuestionStyle>
  );
}

const QuestionStyle = styled.section`
  width: 53vw;
  min-height: 47vw;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5vw;
  align-items: center;
  padding: 2vw 2.5vw;
`;

const TitleStyle = styled.div`
  background-color: ${(props) => props.background};
  width: 47.8vw;
  min-height: 9.6vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #ffffff;
    font-weight: 700;
    font-size: 23px;
  }
`;

const AnswersStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.8vw;
`;
