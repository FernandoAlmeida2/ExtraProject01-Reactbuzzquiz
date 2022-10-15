import styled from "styled-components";
import CreateLevelItem from "./CreateLevelItem";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function CreateLevels({
  levelsNewQuiz,
  setLevels,
  nLevels,
}) {
  const [indexOpened, setIndexOpened] = useState(0);
  const levelsComponent = [];
  const navigate = useNavigate();

  
  function proceed(e) {
    e.preventDefault();
    if(levelsNewQuiz.filter((level) => level.minValue === "0").length === 0){
        alert("Pelo menos um nível deve ter % de acerto 0%");
    } else{
        navigate("/Quiz-Creation-Result");
    }
  }


  for (let i = 0; i < nLevels; i++) {
    levelsComponent.push(
      <CreateLevelItem
        key={i}
        index={i}
        isOpened={i === indexOpened}
        setIndexOpened={setIndexOpened}
        levelsNewQuiz={levelsNewQuiz}
        setLevels={setLevels}
      />
    );
  }
  return (
    <LevelsStyle>
      <h1>Agora, decida os níveis</h1>
      <form onSubmit={proceed}>
        {levelsComponent}
        <SubmitButton type="submit">Finalizar Quiz</SubmitButton>
      </form>
    </LevelsStyle>
  );
}

const LevelsStyle = styled.main`
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
