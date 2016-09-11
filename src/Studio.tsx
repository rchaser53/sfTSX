import * as React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
const ReactDom = require('react-dom');

import rootReducer from './reducers/reducers';

/** studioのstateを管理するstore */
const store = configureStore(rootReducer,{});

ReactDom.render(
    <Provider store={store}>
        <App />
	</ Provider>,
    document.getElementById('redux-app')
);