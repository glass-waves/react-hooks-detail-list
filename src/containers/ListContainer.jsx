import List from '../components/list/List'
import { useFetch } from '../hooks/useFetch'
import React from 'react';

const ListContainer = () => {

    const { cardList, loading} = useFetch(); 

    if (loading) return <h1>Loading</h1>;

    return (
        <div>
            <List cards={cardList}/> 
        </div>
    )
}

export default ListContainer
