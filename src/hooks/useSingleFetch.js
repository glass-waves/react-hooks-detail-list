import React, { useEffect, useState } from 'react';
import { fetchSingleCard } from '../services/fetchSingleCard';


export const useSingleFetch = (id) => {
    const [card, setCard] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async() => {
            const card = await fetchSingleCard(id);
            setCard(card);
            setLoading(false)
        })();
    }, [])
    
    return { card, loading };
}