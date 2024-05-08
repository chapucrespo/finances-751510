import Title from 'components/Title'
import React from 'react'
import { StyledDiv } from './styled'
import { ResultsProps } from 'interfaces'

const Results: React.FC<ResultsProps> = ({amount, htmlFor, text}) => {
    return (
        <>
            <Title htmlFor={htmlFor} text={text}/>
            <StyledDiv className={htmlFor}>${amount}</StyledDiv>
        </>
    )
}

export default Results