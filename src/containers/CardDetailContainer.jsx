import React from 'react';
import Detail from '../components/detail/Detail';
import PropTypes from 'prop-types';
import { useSingleFetch } from '../hooks/useSingleFetch';


const CardDetailContainer = (props) => {
    const {card, loading} = useSingleFetch(props.match.params.id);

    if(loading) return <h1>Loading</h1>
    return <Detail card={card}/>
}
CardDetailContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired
    }).isRequired
}
export default CardDetailContainer
