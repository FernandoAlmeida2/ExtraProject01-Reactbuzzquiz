import styled from "styled-components";
import QuizzesList from "../QuizzesList";

function isUserQuiz(id) {
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(localStorage.key(i)) === String(id)) return true;
  }
  return false;
}

export default function HomeScreen({ quizzesData }) {
  const userQuizzes = quizzesData.filter((quiz) => isUserQuiz(quiz.id));

  return (
    <MainStyle>
      {userQuizzes.length === 0 ? (
        <MenuUserStyle>
          <h2>
            Você não criou nenhum
            <br /> quizz ainda :(
          </h2>
          <div>Criar Quiz</div>
        </MenuUserStyle>
      ) : (
        <QuizzesList quizzesArray={userQuizzes}>
          <h3>Seus Quizes</h3>
          <ion-icon name="add-circle"></ion-icon>
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

const MenuUserStyle = styled.div`
  width: 73vw;
  height: 14vw;
  font-weight: 400;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border: 1px dashed #d5d5d5;
  border-radius: 5px;

  h2 {
    margin-top: 1vw;
    text-align: center;
    line-height: 24px;
    color: #b9b9b9;
    font-size: 20px;
  }

  & > div {
    color: #ec362d;
    border: 1px dashed #ec362d;
    border-radius: 50px;
    font-size: 21px;
    width: 10.5vw;
    height: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
