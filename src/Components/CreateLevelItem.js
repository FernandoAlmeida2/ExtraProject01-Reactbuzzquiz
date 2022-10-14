import styled from "styled-components";
import writeIcon from "../img/write.png";

export default function CreateLevelItem({
  index,
  isOpened,
  setIndexOpened,
  levelsNewQuiz,
  setLevels,
}) {
  function handleForm(e) {
    const newArray = [...levelsNewQuiz];
    newArray[index][e.target.name] = e.target.value;
    setLevels(newArray);
  }

  if (!isOpened) {
    return (
      <LockedStyle>
        <TextBox>Nível {index + 1}</TextBox>
        <img
          src={writeIcon}
          alt="write-icon"
          onClick={() => setIndexOpened(index)}
        />
      </LockedStyle>
    );
  }

  return (
    <LevelStyle>
      <InputsBox>
        <TextBox>Nível {index + 1}</TextBox>
        <InputElement
          placeholder="Título do nível"
          minLength="10"
          value={levelsNewQuiz[index].title}
          name="title"
          onChange={handleForm}
          required
        ></InputElement>
        <InputElement
          placeholder="% de acerto mínima"
          type="number"
          min="0"
          max="100"
          value={levelsNewQuiz[index].minValue}
          name="minValue"
          onChange={handleForm}
          required
        ></InputElement>
        <InputElement
          placeholder="URL da imagem do nível"
          type="url"
          value={levelsNewQuiz[index].image}
          name="image"
          onChange={handleForm}
          required
        ></InputElement>
        <InputElement
          placeholder="Descrição do nível"
          minLength="30"
          value={levelsNewQuiz[index].text}
          name="text"
          onChange={handleForm}
          required
        ></InputElement>
      </InputsBox>
    </LevelStyle>
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

const LevelStyle = styled.section`
  margin: 1vw 0;
`;

const InputsBox = styled.div`
  width: 42vw;
  height: 22vw;
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
