import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyle>
      <h1>BuzzQuiz</h1>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ec362d;
  height: 5vw;

  h1 {
    color: #ffffff;
    font-weight: 700;
    font-size: 37px;
  }
`;
