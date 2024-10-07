import React from "react";

export const Card = ({ name, card_task, difficulty }) => {

    return (
        <div style={{border: 'solid black', paddingLeft: '10px', paddingRight: '10px', margin: '10px',}}>
            <h2 style={{border: 'solid black'}}>{name}</h2>
            <p>{card_task}</p>
            {/* <span>Difficulty: {difficulty}</span> */}
        </div>
    );
};