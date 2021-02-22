import { 
    START_FETCHING_CARD,
    FINISH_FETCHING_CARD,
    NAVIGATE,
    ADD_PROMISE,
    REMOVE_PROMISE
} from './actions';

const navigate = (state, path) => {
    const m = /^\/card\/([^/]+)$/.exec(path);
    if (m !== null) {
        return {
            ...state,
            page: {
                type: 'card',
                cardSlug: m[1],
                isFetching: true
            }
        };
    }
    return state;
};

const root = (state = {}, action) => {
    switch (action.type) {
        case ADD_PROMISE:
            return {
                ...state,
                promises: [...state.promises, action.promise]
            };
        case REMOVE_PROMISE:
            return {
                ...state,
                promises: state.promises.filter(p => p !== action.promise)
            };
        case START_FETCHING_CARD:
            return {
                ...state,
                page: {
                    ...state.page,
                    isFetching: true
                }
            };
        case FINISH_FETCHING_CARD:
            return {
                ...state,
                page: {
                    ...state.page,
                    isFetching: false,
                    cardData: action.cardData
                }
            };
        case NAVIGATE:
            return navigate(state, action.path);
    }
    return state;
};

export default root;
