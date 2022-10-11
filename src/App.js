import styled from "styled-components"
import Header from "./Components/Header"
import ResetStyle from "./ResetStyle"

export default function App(){
    return (
        <AppContainer>
            <ResetStyle />
            <Header />

        </AppContainer>
    )
}


const AppContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 100vh;
`