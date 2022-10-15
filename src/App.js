import styled from "styled-components";
import Header from "./Components/Header";
import ResetStyle from "./ResetStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import { useState, useEffect } from "react";
import axios from "axios";
import ShowQuizScreen from "./Components/ShowQuizScreen";
import CreateQuiz from "./Components/CreateQuiz";
import CreateQuestions from "./Components/CreateQuestions";
import questionBody from "./questionBody";
import levelBody from "./levelBody";
import CreateLevels from "./Components/CreateLevels";
import CreationResult from "./Components/CreationResult";

export default function App() {
  const [quizzesData, setQuizzes] = useState(null);
  const [infoNewQuiz, setInfoNewQuiz] = useState({
    title: "",
    image: "",
    nQuestions: "",
    nLevels: "",
  });
  const [questionsNewQuiz, setQuestions] = useState([]);
  const [levelsNewQuiz, setLevels] = useState([]);

  function addQuestionsQuiz() {
    const questionsArray = [];
    for (let i = 0; i < infoNewQuiz.nQuestions; i++) {
      const tempObj = questionBody.answers.map((answer) => {
        return { ...answer };
      });
      questionsArray.push({ ...questionBody, answers: tempObj });
    }
    setQuestions(questionsArray);
  }

  function addLevelsQuiz() {
    const levelsArray = [];
    for (let i = 0; i < infoNewQuiz.nLevels; i++) {
      levelsArray.push({ ...levelBody });
    }
    setLevels(levelsArray);
  }

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err.response.data));
  }, []);

  if (quizzesData === null) {
    return <h1>Carregando...</h1>;
  }

  return (
    <AppContainer>
      <ResetStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen quizzesData={quizzesData} />} />
          <Route path="/Show-Quiz/:idQuiz" element={<ShowQuizScreen />} />
          <Route
            path="/Create-Quiz-Info"
            element={
              <CreateQuiz
                infoNewQuiz={infoNewQuiz}
                setInfoNewQuiz={setInfoNewQuiz}
                addQuestionsQuiz={addQuestionsQuiz}
                addLevelsQuiz={addLevelsQuiz}
              />
            }
          />
          <Route
            path="/Create-Quiz-Questions"
            element={
              <CreateQuestions
                questionsNewQuiz={questionsNewQuiz}
                setQuestions={setQuestions}
                nQuestions={infoNewQuiz.nQuestions}
              />
            }
          />
          <Route
            path="/Create-Quiz-Levels"
            element={
              <CreateLevels
                levelsNewQuiz={levelsNewQuiz}
                setLevels={setLevels}
                nLevels={infoNewQuiz.nLevels}
              />
            }
          />
          <Route
            path="/Quiz-Creation-Result"
            element={
              <CreationResult
                infoNewQuiz={infoNewQuiz}
                questionsNewQuiz={questionsNewQuiz}
                levelsNewQuiz={levelsNewQuiz}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  width: 100vw;
  height: 100vh;
`;
