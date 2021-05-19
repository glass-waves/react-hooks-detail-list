import React, { useEffect, useState } from 'react';
import Detail from '../components/detail/Detail';
import PropTypes from 'prop-types';
import { fetchSingleCard } from '../services/fetchSingleCard';

const CardDetailContainer = (props) => {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async() => {
            const card = await fetchSingleCard(props.match.params.id);
            setCard(card);
            setLoading(false)
        })();
    }, [])
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
