import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import './styles/index.css';
import App from './components/App';
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from "./redux/reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger'



declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const logger = createLogger

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware()

// @ts-ignore
const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk, saga, /* logger */
    ),
    composeEnhancers()
))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

render(app, document.getElementById('root'));
