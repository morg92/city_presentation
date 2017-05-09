import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(renducers, applyMiddleware(thunk));

render(
    <Provider store={store}>
        
    </Provider>
);