import React from "react";

export const Card = ({ name, card_task, difficulty }) => {

    return (
        <div>
            <h2>{name}</h2>
            <p>{card_task}</p>
            <span>Difficulty: {difficulty}</span>
        </div>
    );
};