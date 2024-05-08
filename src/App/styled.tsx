import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Container = styled.div`
    background-color: var(--silver);
    width: 50vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    justify-content: space-evenly;
    box-shadow: var(--dark-shadow);
    -webkit-box-shadow: var(--dark-shadow);
    -moz-box-shadow: var(--dark-shadow);

    @media (max-width: 550px) {
        width: 90vw;
        height: 60vh;
    }
`

export const StyledButton = styled.button`
    width: 40%;
    border-radius: 15px;
    cursor: pointer;
    height: 40px;
    border: 2px solid var(--tiffanyGreen);
    background-color: var(--darkGray);
    color: var(--white);
    font-weight: 700;
    box-shadow: var(--shadow);
    -webkit-box-shadow: var(--shadow);
    -moz-box-shadow: var(--shadow);

    @media (max-width: 950px) {
        width: 90%
    }

    &:hover, &:focus {
        background-color: var(--tiffanyGreen);
    }
`

export const Footer = styled.div`
    color: var(--white);
    font-weight: 500;
    font-size: 1rem;

    a {
        color: var(--white)
    }

    span {
        background: linear-gradient(0deg, var(--darkGray) 0%, var(--darkGray) 16%, var(--tiffanyGreen) 16%, var(--tiffanyGreen) 41%, var(--darkGray) 41%);
        padding: 0 0.1em 0 0.1em;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }
`