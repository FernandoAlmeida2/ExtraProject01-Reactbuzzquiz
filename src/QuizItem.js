import styled from "styled-components";

export default function QuizItem({image, title}) {
  return (
  <QuizStyle>
    <img src={image} alt={title} />
    <h1>{title}</h1>
  </QuizStyle>);
}

const QuizStyle = styled.div`
  width: 23.6vw;
  height: 12.6vw;
  position: relative;

  img{
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: fill;
    border-radius: 5px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 64.58%,
      #000000 100%
    ),
    url(image.png);
  }

  h1{
    color: #ffffff;
    font-weight: 400;
    font-size: 19px;
    line-height: 22px;
    position: absolute;
    left: 1.3vw;
    bottom: 0.8vw;
  }
`;

