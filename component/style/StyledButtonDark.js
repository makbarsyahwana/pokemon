import styled from "@emotion/styled";

export const StyledButtonDark = styled.button`
  border: solid 4px #000;
  background: #4d7aff;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #fff;
  font-family: inherit;
  outline: none;
  cursor: pointer;
  padding: 6px 12px;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  transition: all 200ms ease-in;
  border-radius: 10px;
  @media (min-width: 768px) {
    padding: 6px 12px;
    font-size: 1.5rem;
  }
  &:hover {
    background: #092168;
  }
`;