import styled from "@emotion/styled";

export const StyledPokeTypes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
  strong {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    margin-right: 0.5rem;
    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }
  .types {
    display: flex;
  }
  .type {
    text-transform: capitalize;
    font-size: 11px;
    padding: 0.5rem 1rem;
    background: #ff4d4d;
    border-radius: 10px;
    border: solid 1px #171923;
    color: #fff;
    @media (min-width: 768px) {
      font-size: 11px;
    }
  }
  .type:not(:first-of-type) {
    margin-left: 0.75rem;
  }
`;