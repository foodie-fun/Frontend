import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import reducer from "./reducers";
import logger from 'redux-logger'
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>,
    document.getElementById('root')
);
