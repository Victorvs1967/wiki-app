import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import configureStore from './redux/configureStore';
import { navigate } from './redux/actions';

let initState = {
    page: {
        type: 'home'
    }
};

const store = configureStore(initState);
store.dispatch(navigate(location));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app')
);