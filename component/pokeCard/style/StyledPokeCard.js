import styled from "@emotion/styled";

//styled component with emotion
export const StyledPokeCard = styled.div`
  .card {
    width: 100%;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #e2e0da;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }
    .name {
      margin-top: 1.25rem;
      background: #ffff4d;
      border-radius: 10px;
      padding: 0.25rem 0.875rem;
      text-align: center;
      font-size: 1.375rem;
      letter-spacing: 0.25px;
      border: none;
      text-transform: capitalize;
    }

    .nickname {
      margin-top: 1rem;
      padding: 0.25rem 0.875rem;
      text-align: center;
      font-size: 1.375rem;
      letter-spacing: 0.25px;
      border: none;
      text-transform: capitalize;
    }
  }
`;
