import * as React from 'react';
import styled from 'styled-components'

import './App.css';
import Route from './router/Route';

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
            <Route/>
        </Wrapper>
    );
};

export default App;
