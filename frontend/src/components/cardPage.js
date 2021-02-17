import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCardIfNeeded } from '../redux/actions';

import Card from './card';

class CardPage extends Component {

    componentWillMount() {
        this.props.dispatch(fetchCardIfNeeded());
    }

    componentWillUpdate() {
        this.props.dispatch(fetchCardIfNeeded());
    }

    render() {
        const { isFetching, cardData } = this.props;
        return (
            <div>
                { isFetching && <h2>Loading...</h2> }
                { cardData && <Card { ...cardData } /> }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { page } = state;
    return page;
}

export default connect(mapStateToProps)(CardPage);