import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './../redux/counter';
import Counter from './../components/Counter';

class CounterContainer extends Component {

    handleIncrement = async () => {
        const { increment } = this.props;
        increment();
    }
    
    handleDecrement = () => {
        const { decrement } = this.props;
        decrement();
    }

    render() {
        const { number } = this.props;
        return (
            <Counter 
                number={number} 
                onIncrement={this.handleIncrement} 
                onDecrement={this.handleDecrement}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    number: state.counter.number
});

const mapDispatchToProps = {
    increment,
    decrement
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);