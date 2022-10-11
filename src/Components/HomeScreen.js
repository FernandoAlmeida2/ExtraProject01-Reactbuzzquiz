import styled from "styled-components";
import QuizItem from "../QuizItem";

export default function HomeScreen({quizzesData}) {
  return (
    <MainStyle>
      <MenuUserStyle>
        <h2>
          Você não criou nenhum
          <br /> quizz ainda :(
        </h2>
        <div>Criar Quiz</div>
      </MenuUserStyle>
      <AllQuizzesStyle>
        <h3>Todos os Quizes</h3>
        <div>
            {quizzesData.map((quiz) => <QuizItem key={quiz.id} title={quiz.title} image={quiz.image} />)}
        </div>
      </AllQuizzesStyle>
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

const AllQuizzesStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vw;

  h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
  }

  & > div {
    width: 73vw;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    gap: 1vw;
  }
`;
