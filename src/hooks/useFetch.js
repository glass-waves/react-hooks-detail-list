import React, { useState, useEffect } from 'react';
import fetchCards from '../services/fetchCards';


export const useFetch = () => {
    const [cardList, setCardList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async() => {
            const cards = await fetchCards();
            setCardList(cards);
            setLoading(false);
        })();
    }, []);

    return { cardList, loading };
}