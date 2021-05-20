const fetchCards = async () => {
    const res = await fetch('https://api.magicthegathering.io/v1/cards');
    const { cards } = await res.json();
    return cards.map((card) => ({
        name: card.name || 'NA',
        image: card.imageUrl || 'NA',
        cardType: card.type || 'NA',
        rarity: card.rarity || 'NA',
        text: card.text || 'NA',
        power: card.power || 'NA',
        toughness: card.toughness || 'NA',
        id: card.id || 'NA',
    }));
}

export default fetchCards;