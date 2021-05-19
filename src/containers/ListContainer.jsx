import React, { useState, useEffect } from 'react'
import fetchCards from '../services/fetchCards';
import List from '../components/list/List'

const ListContainer = () => {
    const [cardList, setCardList] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        (async() => {
            const cards = await fetchCards();
            
            setCardList(cards);
            setLoading(false);
        })();
    }, []);

    if (loading) return <h1>Loading</h1>;

    return (
        <div>
            <List cards={cardList}/> 
        </div>
    )
}

export default ListContainer
