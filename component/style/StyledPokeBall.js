import styled from "@emotion/styled";

export const StyledPokeBall = styled.div`
    display: flex;
    width: 70px
    justify-content: center;
    margin-top: 1rem;
    align-items: center;
    flex-direction: column;
    transition: all 200ms ease-out;
    &:hover {
      transform: scale(1.1);
    }
`;