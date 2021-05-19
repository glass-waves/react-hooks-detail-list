export const fetchSingleCard = async(id) => {
    const res = await fetch(`https://api.magicthegathering.io/v1/cards/${id}`)
    const { card } = await res.json();
    return {
        name: card.name,
        image: card.imageUrl,
        cardType: card.type,
        rarity: card.rarity,
        text: card.text,
        power: card.power,
        toughness: card.toughness,
        id: card.id,
    };

} 