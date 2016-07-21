import * as React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
const ReactDom = require('react-dom');

/** studioのstateを管理するstore */
const store = configureStore();

ReactDom.render(
    <Provider store={store}>
        <App />
	</ Provider>,
    document.getElementById('redux-app')
);