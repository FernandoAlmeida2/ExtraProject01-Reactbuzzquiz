import styled from "styled-components";

export default function CreateQuiz() {
    function proceed(e){
        e.preventDefault();
        
    }
  return (
    <CreateStyle>
      <h1>Comece pelo começo</h1>
      <form onSubmit={proceed}>
        <InputsStyle>
          <input placeholder="Título do seu quiz" minlength="20" maxlength="65" required></input>
          <input placeholder="URL da imagem do seu quiz" type="url" required></input>
          <input placeholder="Quantidade de perguntas do quiz" type="number" min="3" required></input>
          <input placeholder="Quantidade de níveis do quiz"  type="number" min="2" required></input>
        </InputsStyle>
        <button type="submit">Prosseguir pra criar perguntas</button>
      </form>
    </CreateStyle>
  );
}

const CreateStyle = styled.main`
  margin-top: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 23px;
    margin-bottom: 1.8vw;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vw;
  }

  button {
    width: 25.6vw;
    height: 3.75vw;
    color: #ffffff;
    font-weight: 400;
    font-size: 21px;
    background-color: #ec362d;
    border-radius: 15px;
    border: none;
  }
`;

const InputsStyle = styled.div`
  width: 42vw;
  height: 18vw;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  gap: 0.7vw;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);

  input {
    width: 39.1vw;
    height: 3.2vw;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    padding-left: 1.8vw;

    ::placeholder {
      opacity: 1;
      font-weight: 400;
      font-style: italic;
      font-size: 19px;
      color: #bababa;
    }
  }
`;
