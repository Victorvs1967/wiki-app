import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { navigate } from '../redux/actions';
import CardPage from './cardPage';

const App = ({ pageType }) => {

    const navigateHandler = (dispatch, event) => {
        if (event.state && event.state.pathname) {
            event.preventDefault();
            event.stopPropagation();
            dispatch(navigate(event.state, true));
        }
    };

    useEffect(() => {
        history.replaceState({
            pathname: location.pathname,
            href: location.href
        }, '');
        window.addEventListener('popstate', event => navigateHandler(event));
    });

    return (
        <div>
            { pageType === 'card' && <CardPage /> }
        </div>
        );
};

const mapStateToProps = state => {
    const { page } = state;
    const { type } = page;
    return {
        pageType: type
    };
};

export default connect(mapStateToProps)(App);
