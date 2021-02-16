export const START_FETCHING_CARD = 'START_FETCHING_CARD';
export const FINISH_FETCHING_CARD = 'FINISH_FETCHING_CARD';

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
    return 'http://localhost:4001/api/v1';
};

const fetchCard = () => {
    return (dispatch, getState) => {
        dispatch(startFetchingCard());
        let url = apiPath() + '/card/' + getState().page.cardSlug;
        return fetch(url)
                .then(response => response.json())
                .then(json => dispatch(finishFetchingCard(json)));
    };
};

export const fetchCardIfNeeded = () => {
    return (dispatch, getState) => {
        let state = getState().page;
        if (state.cardData === undefined || state.cardData.slug !== state.cardSlug) {
            return dispatch(fetchCard());
        };
    }
};
