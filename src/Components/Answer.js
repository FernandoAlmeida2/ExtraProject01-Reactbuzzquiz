import styled from "styled-components";
import { useState } from "react";

export default function Answer({
  answer,
  isClicked,
  userClicked,
  index,
  addHitAnswer,
}) {
  const [thisIsTheClicked, setThisClicked] = useState(false);

  function optionSelected() {
    setThisClicked(true);
    userClicked(index);
    if (answer.isCorrectAnswer) addHitAnswer();
  }
  return (
    <AnswerStyle
      isClicked={isClicked}
      thisIsTheClicked={thisIsTheClicked}
      answerIsTrue={answer.isCorrectAnswer}
    >
      <img
        src={answer.image}
        alt="answer option"
        onClick={() => !isClicked && optionSelected()}
      />
      <h1>{answer.text}</h1>
    </AnswerStyle>
  );
}

function selectOpacity(isClicked, thisIsTheClicked) {
  return !isClicked || thisIsTheClicked ? "1" : "0.3";
}

function selectColor(isClicked, answerIsTrue) {
  if (!isClicked) return "#000000";
  if (answerIsTrue) return "#009C22";
  return "#FF4B4B";
}

const AnswerStyle = styled.div`
  display: flex;
  max-width: 23vw;
  flex-direction: column;
  align-items: center;
  gap: 1.2vw;
  opacity: ${(props) => selectOpacity(props.isClicked, props.thisIsTheClicked)};

  img {
    width: 23vw;
    height: 12.2vw;
    cursor: pointer;
  }

  h1 {
    margin-left: 0.2vw;
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => selectColor(props.isClicked, props.answerIsTrue)};
  }
`;
