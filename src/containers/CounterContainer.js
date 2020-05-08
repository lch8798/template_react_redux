import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './../redux/counter';
import Counter from './../components/Counter';

export default function CounterContainer(props) {
    const dispatch = useDispatch();
    const number = useSelector((state) => state.counter.number);

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return <Counter number={number} onIncrement={handleIncrement} onDecrement={handleDecrement} />;
}
