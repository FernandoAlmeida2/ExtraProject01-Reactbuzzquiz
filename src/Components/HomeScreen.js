import styled from "styled-components";
import QuizzesList from "./QuizzesList";
import { Link } from "react-router-dom";

function isUserQuiz(id) {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(localStorage.key(i)) === id) return true;
  }
  return false;
}

export default function HomeScreen({ quizzesData }) {
  const userQuizzes = quizzesData.filter((quiz) => isUserQuiz(String(quiz.id)));

  return (
    <MainStyle>
      {userQuizzes.length === 0 ? (
        <MenuUserStyle>
          <h2>
            Você não criou nenhum
            <br /> quizz ainda :(
          </h2>
          <NavLink to="/Create-Quiz-Info">
            Criar Quiz
          </NavLink>
        </MenuUserStyle>
      ) : (
        <QuizzesList quizzesArray={userQuizzes}>
          <h3>Seus Quizes</h3>
          <Link to="/Create-Quiz-Info">
            <ion-icon name="add-circle"></ion-icon>
          </Link>
        </QuizzesList>
      )}

      <QuizzesList quizzesArray={quizzesData}>
        <h3>Seus Quizes</h3>
      </QuizzesList>
    </MainStyle>
  );
}

const MainStyle = styled.main`
  margin: 12vw 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7vw;
`;

const MenuUserStyle = styled.section`
  width: 73vw;
  height: 14vw;
  font-weight: 400;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border: 1px dashed #d5d5d5;
  border-radius: 5px;
  cursor: pointer;

  h2 {
    margin-top: 1vw;
    text-align: center;
    line-height: 24px;
    color: #b9b9b9;
    font-size: 20px;
  }
`;

const NavLink = styled(Link)`
  color: #ec362d;
  border: 1px dashed #ec362d;
  border-radius: 50px;
  font-size: 21px;
  width: 10.5vw;
  height: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
