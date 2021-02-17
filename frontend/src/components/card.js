import React, { Component } from 'react';

class Card extends Component {

    componentDidMount() {
        document.title = this.props.name;
    }

    render() {
        const { name, markdown } = this.props;
        return (
            <div>
                <h1>{ name }</h1>
                <div dangerouslySetInnerHTML={{__html: markdown}}></div>
            </div>
        );
    }
}

export default Card;