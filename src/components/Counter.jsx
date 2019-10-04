import React from 'react';
import styled from 'styled-components';

const Counter = ({ number, onIncrement, onDecrement }) => {
  return (
    <CounterWrap className="Counter">
      <CounterNumber>{number}</CounterNumber>
      <CounterButton onClick={onIncrement}>+</CounterButton>
      <CounterButton onClick={onDecrement}>-</CounterButton>
    </CounterWrap>
  )
}

export default Counter;

const CounterWrap = styled.div`
    padding: 10px;
`;
const CounterNumber = styled.h5`
    padding: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
`;
const CounterButton = styled.button`
    padding: 5px 10px;
    cursor: pointer;
`;