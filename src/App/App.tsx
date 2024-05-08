import { useState } from "react"
import { Container, StyledButton, MainContainer, Footer } from "./styled"
import Values from "components/Values"

function App() {
  const [buttonClicked, setButtonClicked] = useState<boolean>(false)

  return (
    <MainContainer>
    <Container>
      <Values buttonClicked={buttonClicked} />
      <StyledButton type='submit' onClick={() => setButtonClicked(!buttonClicked)}>
        {!buttonClicked ? 'Calcular' : 'Volver a calcular'}
      </StyledButton>
    </Container>
    <Footer>
      <span>
        Developed by <a href="https://github.com/chapucrespo" target="_blank">Chapu Crespo</a>
      </span>
    </Footer>
    </MainContainer>
  )
}

export default App
