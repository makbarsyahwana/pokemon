import styled from "@emotion/styled";

//styled component with emotion
export const StyledPokeMoves = styled.div`
  border: solid 1px #171923;
  border-radius: 25px;
  margin-top: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  position: relative;
  strong {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
  .moves {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
  .move {
    margin-top: 1rem;
    margin-right: 0.5rem;
    font-size: 11px;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: none;
    background: #3655b3;
    color: #fff;
    text-transform: capitalize;
    position: relative;
    @media (min-width: 768px) {
      font-size: 11px;
    }
  }
`;