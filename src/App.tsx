import * as React from 'react';
import styled from 'styled-components'

import './App.css';
import Main from "./pages/Main";

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #ccc;
    overflow: hidden;
`;

const App = () => {
    return (
        <Wrapper>
            <Main/>
        </Wrapper>
    );
};

export default App;
