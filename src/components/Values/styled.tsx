import styled from "styled-components";

export const StyledInput = styled.input`
    border-radius: 15px;
    height: 40px;
    border: 2px solid var(--tiffanyGreen);
    box-shadow: var(--shadow);
    -webkit-box-shadow: var(--shadow);
    -moz-box-shadow: var(--shadow);
    text-align: center;

    &:focus {
        border: 3px solid var(--tiffanyGreen);
        outline: none;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    @media (max-width: 950px) {
        width: 90%;
    }
`