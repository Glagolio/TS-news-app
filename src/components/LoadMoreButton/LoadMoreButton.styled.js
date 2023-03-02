import styled from "@emotion/styled";

export const LoadMoreButtonStyled = styled.button`
  display: block;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-size: 28px;
  font-weight: 700;

  transition: transform linear 250ms, background-color linear 500ms;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #787878;
  }
`;
