import Results from 'components/Results';
import Title from 'components/Title'
import React, { useEffect, useState } from 'react'
import { StyledInput, Container } from './styled';

const Values: React.FC<{buttonClicked: boolean}> = ({buttonClicked}) => {
    const [amount, setAmount] = useState<number>(0)

    useEffect(() => {
        !buttonClicked && setAmount(0)
    }, [buttonClicked])

    const getRoundedNumber = (percentage: number) => {
        const result = amount*(percentage/100);
        return Math.round(result*100)/100;
    }

    return (
        <Container>
            {!buttonClicked ?
            <>
                <Title htmlFor='amount' text='Ingrese monto/sueldo'/>
                <StyledInput 
                    name='amount' 
                    id='amount' 
                    onChange={(e) => setAmount(parseInt(e.target.value))} 
                    placeholder='Monto o sueldo'>
                </StyledInput>
            </>
            :
            <>
                <Results amount={getRoundedNumber(75)} htmlFor='expenses' text='Gastos'/>
                <Results amount={getRoundedNumber(15)} htmlFor='savings' text='Ahorros'/>
                <Results amount={getRoundedNumber(10)} htmlFor='investment' text='Inversión'/>
            </>
            }
        </Container>
    )
}

export default Values