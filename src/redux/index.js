import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import app from './app';
import counter from './counter';
import config from './../config.json';

let middleware = null;
if (config.dev) {
    // set dev tool
    middleware = composeWithDevTools(applyMiddleware(thunk));
} else {
    middleware = applyMiddleware(thunk);
}

export default createStore(
    combineReducers({
        app,
        counter,
    }),
    middleware,
);
