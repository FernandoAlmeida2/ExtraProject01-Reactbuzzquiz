import styled from "styled-components";
import Header from "./Components/Header";
import ResetStyle from "./ResetStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Components/HomeScreen";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [quizzesData, setQuizzes] = useState(null);
  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes")
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err.response.data));
  }, []);
  
  if(quizzesData === null){
    return <h1>Carregando...</h1>
  }

  return (
    <AppContainer>
      <ResetStyle />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen quizzesData={quizzesData} />} />
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
