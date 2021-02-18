import React, { useEffect } from 'react'

import { connect } from 'react-redux';
import { fetchCardIfNeeded } from '../redux/actions';

import Card from './card';

const CardPage = ({ isFetching, cardData, dispatch }) => {

    useEffect(() => dispatch(fetchCardIfNeeded()), []);

    return (
        <div>
            { isFetching && <h2>Loading...</h2> }
            { cardData && <Card { ...cardData } /> }
        </div>
    );
};

const mapStateToProps = state => {
    const { page } = state;
    return page;
}

export default connect(mapStateToProps)(CardPage);