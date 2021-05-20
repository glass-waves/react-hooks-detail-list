import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card'
const List = ({ cards }) => {
    return (
    <ul aria-label="cards">
        {cards.map(card => (
            <Card card={card} key={card.id}/>
        ))}
    </ul>
    );
};

List.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            cardType: PropTypes.string.isRequired,
            rarity: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            power: PropTypes.string.isRequired,
            toughness: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ),
};

export default List;
