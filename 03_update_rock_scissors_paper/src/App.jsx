import React from "react";
import styled from "styled-components";
import GamePage from "./pages/GamePage";

function App() {
    return (
        <AppContainer>
            <GamePage />
        </AppContainer>
    );
}

export default App;
const AppContainer = styled.div`
    /* background-color: aliceblue; */
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    position: relative;
`;
