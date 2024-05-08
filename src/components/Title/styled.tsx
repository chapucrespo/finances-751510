import styled from "styled-components";

export const StyledTitle = styled.label`
    color: var(--black);
    font-weight: 700;
    font-size: 0.9rem;

    span {
        background: linear-gradient(0deg, var(--silver) 0%, var(--silver) 16%, var(--tiffanyGreen) 16%, var(--tiffanyGreen) 41%, var(--silver) 41%);
        padding: 0 0.1em 0 0.1em;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
    }
`