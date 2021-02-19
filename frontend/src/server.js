import '@babel/polyfill';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from './components/app';
import { navigate } from './redux/actions';
import configureStore from './redux/configureStore';

const hasPromises = state => state.promises.length > 0;

const render = async (initialState, url) => {
    const store = configureStore(initialState);
    store.dispatch(navigate(url));

    let app = (
        <Provider store = { store }>
            <App />
        </Provider>
    );
    renderToString(app);

    let prelodedState = store.getState();
    while (hasPromises(prelodedState)) {
        await prelodedState.promises[0];
        prelodedState = store.getState();
    }
    let content = renderToString(app);

    return { content, prelodedState }
};

export default render;