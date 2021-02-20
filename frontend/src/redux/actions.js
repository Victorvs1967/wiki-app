import { isServerSide } from '../utility';
import fetch from 'cross-fetch';

export const ADD_PROMISE = 'ADD_PROMISE';
export const REMOVE_PROMISE = 'ADD_PROMISE';
export const START_FETCHING_CARD = 'START_FETCHING_CARD';
export const FINISH_FETCHING_CARD = 'FINISH_FETCHING_CARD';
export const NAVIGATE = 'NAVIGATE';

const startFetchingCard = () => {
    return {
        type: START_FETCHING_CARD
    };
};

const finishFetchingCard = json => {
    return {
        type: FINISH_FETCHING_CARD,
        cardData: json
    };
};

const apiPath = () => {
    if (!isServerSide()) {
        return 'http://backend:4001/api/v1';
    }
    return 'http://localhost:4001/api/v1';
};

const fetchCard = () => {
    return (dispatch, getState) => {
        dispatch(startFetchingCard());
        let url = apiPath() + '/card/' + getState().page.cardSlug;
        let promise = fetch(url, {}, dispatch, getState)
            .then(response => response.json())
            .then(json => {
                dispatch(finishFetchingCard(json));
                dispatch(removePromise(promise));
            });
        return dispatch(addPromise(promise));
    };
};

export const fetchCardIfNeeded = () => {
    return (dispatch, getState) => {
        let state = getState().page;
        if (state.cardData === undefined || state.cardData.slug !== state.cardSlug) {
            return dispatch(fetchCard());
        }
    }
};

export const navigate = (link, dontPushState) => {
    if (!isServerSide() && !dontPushState) {
        history.pushState({
            pathname: link.pathname,
            href: link.href
        }, '', link.href);
    }
    return {
        type: NAVIGATE,
        path: link.pathname
    };
};

const addPromise = promise => ({
    type: ADD_PROMISE,
    promise: promise
});

const removePromise = promise => ({
    type: REMOVE_PROMISE,
    promise: promise
});
