import styled from "@emotion/styled";

export const NewsCardStyled = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding: 5px;
  cursor: pointer;
  background-color: white;

  transition: transform linear 250ms;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  & h2 {
    text-align: center;

    font-size: 14px;
  }

  & p {
    text-align: center;

    font-size: 8px;
  }
`;
