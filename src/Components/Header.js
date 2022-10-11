import styled from "styled-components";

export default function Header() {
  return (
    <HeaderStyle>
      <h1>BuzzQuiz</h1>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100vw;
  height: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ec362d;
  z-index: 1;
  position: fixed;
  top: 0;
  h1 {
    color: #ffffff;
    font-weight: 700;
    font-size: 37px;
  }
`;
