import React, { useEffect } from 'react';

import { navigate } from '../redux/actions';

const Card = ({ name, html }) => {

    useEffect(() => {
        document.title = name;
    }, []);

    const navigateHandler = (dispatch, event) => {
        if (event.target.tagName === 'A' && event.target.hostname === window.location.hostname) {
            event.preventDefault();
            dispatch(navigate(event.target));
        }
    };

    return (
        <div>
            <h1>{ name }</h1>
            <div dangerouslySetInnerHTML={{__html: html}}
                    onClick={ event => navigateHandler(event) }>
            </div>
        </div>
    );
}

export default Card;