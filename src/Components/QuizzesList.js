import styled from "styled-components";
import QuizItem from "./QuizItem";

export default function QuizzesList({ quizzesArray, children }) {
  return (
    <AllQuizzesStyle>
      <ChildrenStyle>{children}</ChildrenStyle>
      <Quizesdiv>
        {quizzesArray.map((quiz) => (
          <QuizItem key={quiz.id} title={quiz.title} image={quiz.image} id={quiz.id} />
        ))}
      </Quizesdiv>
    </AllQuizzesStyle>
  );
}

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
    display: flex;
    gap: 1vw;

    ion-icon{
        color: #EC362D;
        width: 2.5vw;
        height: 2.5vw;
        cursor: pointer;
    }
  }
`;

const ChildrenStyle = styled.div`
    align-items: center;
`

const Quizesdiv = styled.div`
  width: 73vw;
  flex-wrap: wrap;
  overflow-y: auto;
`;
