import React from 'react';
import CounterContainer from './CounterContainer';
import styled from 'styled-components';

export default function App() {
    return (
        <AppWrap className="App">
            <CounterContainer />
        </AppWrap>
    );
}

const AppWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
