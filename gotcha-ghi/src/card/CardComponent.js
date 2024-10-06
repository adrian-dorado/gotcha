import React, { useState, useEffect } from 'react';

export default function CardComponent() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_GOTCHA}/deal-cards/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch cards: " + response.statusText);
                }
                return response.json();
            })
            .then(data => setCards(data.cards))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Dealt Cards</h1>
            <ul>
                {cards.map(card => (
                    <li key={card.id}>
                        {card.name}: {card.card_task} (Difficulty: {card.difficulty})
                    </li>
                ))}
            </ul>
        </div>
    );
}