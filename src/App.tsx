import * as React from 'react';
import styled from 'styled-components'

import './App.css';
import Main from "./main/Main";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    backgroundColor: 'white'
`;

const App = () => {
    return (
        <div style={{width: '100vw', height: '100vh', position: 'relative', backgroundColor: '#ccc'}}>
            <Wrapper>
                <Main/>
            </Wrapper>
        </div>
    );
};

export default App;
