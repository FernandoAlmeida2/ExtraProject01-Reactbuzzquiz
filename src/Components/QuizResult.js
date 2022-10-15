import styled from "styled-components";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function QuizResult({ hitsPercentage, levels }) {
  let levelIndex = 0;
  const resultRef = useRef();
  setTimeout(
    () => resultRef.current.scrollIntoView({ behavior: "smooth" }),
    2000
  );

  for (let i = 1; i < levels.length; i++) {
    if (hitsPercentage >= Number(levels[i].minValue)) {
      if (Number(levels[i].minValue) > Number(levels[levelIndex].minValue))
        levelIndex = i;
    }
  }
  const levelReached = { ...levels[levelIndex] };
  return (
    <ResultStyle ref={resultRef}>
      <ResultInfo>
        <ResultTitle>
          <h1>
            {hitsPercentage}% de acerto: {levelReached.title}
          </h1>
        </ResultTitle>
        <ResultContent>
          <img src={levelReached.image} alt="resultado" />
          <div>{levelReached.text}</div>
        </ResultContent>
      </ResultInfo>
      <button onClick={() => window.location.reload()}>Reiniciar Quiz</button>
      <Link to="/" style={{ textDecoration: "none" }}>
        <HomeButton>Voltar pra home</HomeButton>
      </Link>
    </ResultStyle>
  );
}

const ResultStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;

  button {
    width: 18vw;
    height: 3.6vw;
    background-color: #ec362d;
    border-radius: 10.5vw;
    border: none;
    color: #ffffff;
    font-size: 21px;
    font-weight: 400;
    margin: 4vw 0 1vw 0;
    cursor: pointer;
  }
`;

const ResultInfo = styled.div`
  width: 53vw;
  height: 30vw;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  gap: 1.5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.8vw 2.5vw;
`;

const ResultTitle = styled.div`
  background-color: ${(props) => props.background};
  width: 50.5vw;
  min-height: 6.9vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ec362d;

  h1 {
    color: #ffffff;
    font-weight: 700;
    font-size: 23px;
  }
`;

const ResultContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5vw;

  img {
    width: 26vw;
    max-height: 19vw;
  }

  div {
    width: 22.8vw;
    height: 17.3vw;
    font-weight: 700;
    font-size: 19px;
    color: #484848;
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
