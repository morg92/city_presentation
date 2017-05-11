import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from '../reducers/index.js';
import App from '../components/App.js';

const store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);