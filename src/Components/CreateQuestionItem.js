import styled from "styled-components";
import writeIcon from "../img/write.png";

export default function CreateQuestionItem({
  index,
  isOpened,
  setIndexOpened,
  questionsNewQuiz,
  setQuestions,
}) {
  function handleForm(e) {
    setQuestions([
      ...questionsNewQuiz,
      { ...questionsNewQuiz[index], [e.target.name]: e.target.value },
    ]);
  }

  if (!isOpened) {
    return (
      <LockedStyle>
        <TextBox>Pergunta {index + 1}</TextBox>
        <img
          src={writeIcon}
          alt="write-icon"
          onClick={() => setIndexOpened(index)}
        />
      </LockedStyle>
    );
  }

  return (
    <QuestionStyle>
      <InputsBox>
        <TextBox>Pergunta {index + 1}</TextBox>
        <InputElement
          placeholder="Texto da pergunta"
          minLength="20"
          value={questionsNewQuiz[index].title}
          name="title"
          onChange={handleForm}
          required
        ></InputElement>
        <TextBox>
          <label htmlFor="questioncolor">
            Selecione a cor de fundo da pergunta:
          </label>
          <input
            type="color"
            id="questioncolor"
            value={questionsNewQuiz[index].image}
            name="image"
            onChange={handleForm}
            required
          ></input>
        </TextBox>
        <TextBox>Resposta correta</TextBox>
        <InputElement
          placeholder="Resposta correta"
          minLength="20"
          value={questionsNewQuiz[index].answers[0].text}
          name="text"
          onChange={handleForm}
          required
        ></InputElement>
        <InputElement
          placeholder="URL da imagem"
          type="url"
          value={questionsNewQuiz[index].answers[0].image}
          name="image"
          onChange={handleForm}
          required
        ></InputElement>
        <TextBox>Respostas incorretas</TextBox>
        <InputElement
          placeholder="Resposta incorreta 1"
          minLength="1"
          value={questionsNewQuiz[index].answers[1].text}
          name="text"
          onChange={handleForm}
          required
        ></InputElement>
        <InputElement
          placeholder="URL da imagem 1"
          minLength="1"
          value={questionsNewQuiz[index].answers[1].image}
          name="image"
          onChange={handleForm}
          required
        ></InputElement>
        <InputElement
          placeholder="Resposta incorreta 2"
          value={questionsNewQuiz[index].answers[2].text}
          name="text"
          onChange={handleForm}
        ></InputElement>
        <InputElement
          placeholder="URL da imagem 2"
          type="url"
          value={questionsNewQuiz[index].answers[2].image}
          name="image"
          onChange={handleForm}
        ></InputElement>
        <InputElement
          placeholder="Resposta incorreta 3"
          value={questionsNewQuiz[index].answers[3].text}
          name="text"
          onChange={handleForm}
        ></InputElement>
        <InputElement
          placeholder="URL da imagem 3"
          type="url"
          value={questionsNewQuiz[index].answers[3].image}
          name="image"
          onChange={handleForm}
        ></InputElement>
      </InputsBox>
    </QuestionStyle>
  );
}

const LockedStyle = styled.div`
  width: 42vw;
  height: 5.1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5vw;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  margin: 1vw 0;

  img {
    width: 1.8vw;
  }
`;

const QuestionStyle = styled.section`
  margin: 1vw 0;
`;

const InputsBox = styled.div`
  width: 42vw;
  height: 57.2vw;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
`;

const TextBox = styled.div`
  width: 39.1vw;
  font-weight: 700;
  font-size: 20px;
  margin: 1vw 0;
  input {
    margin-left: 2vw;
  }
`;

const InputElement = styled.input`
  width: 39.1vw;
  height: 3.2vw;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  padding-left: 1.8vw;
  margin-bottom: 1vw;

  ::placeholder {
    opacity: 1;
    font-weight: 400;
    font-style: italic;
    font-size: 19px;
    color: #bababa;
  }
`;
