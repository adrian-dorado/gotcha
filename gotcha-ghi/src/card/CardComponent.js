import React, { useState, useEffect } from 'react';
import { Card } from './Card';

export const CardComponent = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = () => {
            fetch(`${process.env.REACT_APP_GOTCHA}/deal-cards/`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch cards: " + response.statusText);
                    }
                    return response.json();
                })
                .then(data => setCards(data.cards))
                .catch(error => console.error(error));
        };
        fetchCards();
    }, []);

    return (
        <div style={{ padding: '10px', margin: '10px', outline: 'solid black', alignContent: 'center', textAlign: 'center' }}>
            <div>
                {cards.map(card => (
                    <Card
                        key={card.id}
                        name={card.name}
                        card_task={card.card_task}
                        difficulty={card.difficulty}
                    />
                ))}
            </div>
        </div>
    );
};
