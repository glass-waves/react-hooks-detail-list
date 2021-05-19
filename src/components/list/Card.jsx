import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    return (
        <Link to={card.id}>
            <li>
                <h1>{card.name}</h1>
                <img src={card.image} alt={card.name} />
            </li>
        </Link>
    )
}

Card.propTypes = {
    card: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        cardType: PropTypes.string.isRequired,
        rarity: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        power: PropTypes.string.isRequired,
        toughness: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })
}

export default Card
