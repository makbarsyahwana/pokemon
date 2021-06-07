import styled from "@emotion/styled";

export const StyledSuccessMessage = styled.div`
    display: flex;
    width: 70px
    justify-content: center;
    margin-top: 1rem;
    align-items: center;
    flex-direction: column;

    .pokecard-wrapper {
        margin-top: 2rem;
    }

    .input-nickname {
        margin-top: 2rem;
        width: 100%;
        padding: 10px 20px
        border: solid 2px #000;
        border-radius: 10px;
        font-size: 1.5rem;
        text-align: center;
        font-family: inherit;
        letter-spacing: 0.25px;
        @media (min-width: 768px) {
          padding: 10px 20px;
          font-size: 1.5rem;
        }
    }

    .imput-nickname-error {
        color: #ff2e2e;
        text-align: left;
        margin-top: 0.25rem;
        font-size: 1.125rem;
    }

    .button-wrapper {
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;