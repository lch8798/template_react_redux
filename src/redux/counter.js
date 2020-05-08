// action types
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// actions
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// default state
const initialState = {
    number: 0,
};

// reducers
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1,
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            };
        default:
            return state;
    }
}
