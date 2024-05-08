import React from 'react'
import { StyledTitle } from './styled';
import { TitleProps } from 'interfaces';

const Title: React.FC<TitleProps> = ({text, htmlFor}) => {
    return (
        <StyledTitle htmlFor={htmlFor}>
            <span>{text}</span>
        </StyledTitle>
    )
}

export default Title