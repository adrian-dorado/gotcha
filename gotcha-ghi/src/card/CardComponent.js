import React, { useState, useEffect } from 'react';
import { Card } from './Card';

export default function CardComponent() {
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
        }
        fetchCards();
    }, []);

    return (
        <div>
            <div>Gotcha!</div>
            <ul>
                {cards.map(card => (
                    <Card
                        key={card.id}
                        name={card.name}
                        card_task={card.card_task}
                        difficulty={card.difficulty}
                    >
                    </Card>
                ))}
            </ul>
        </div>
    );
};