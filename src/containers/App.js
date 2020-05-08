import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoaded } from './../redux/app';
import CounterContainer from './CounterContainer';
import styled from 'styled-components';

export default function App() {
    const dispatch = useDispatch();
    const appState = useSelector((state) => state.app.appState);

    useEffect(() => {
        handleLoadApp();
    }, []);

    const handleLoadApp = () => {
        dispatch(setLoaded());
    };

    return (
        <AppWrap className="App">
            <AppState>{appState}</AppState>
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

const AppState = styled.p``;
