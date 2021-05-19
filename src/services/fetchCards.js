const fetchCards = async () => {
    const res = await fetch('https://api.magicthegathering.io/v1/cards');
    const { cards } = await res.json();
    return cards.map((card) => ({
        name: card.name,
        image: card.imageUrl,
        cardType: card.type,
        rarity: card.rarity,
        text: card.text,
        power: card.power,
        toughness: card.toughness,
        id: card.id,
    }));
}

export default fetchCards;