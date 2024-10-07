import React, { useEffect } from "react";
import { useState } from 'react';
import { CardDetails } from "./CardDetails";


export const Card = ({ name, card_task, difficulty }) => {

    const [isCardOpen, setIsCardOpen] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);

    const cardOpenCheck = () => {
        setIsCardOpen(prev => !prev);
    }

    useEffect(() => {
        return isCardOpen ? setIsCardVisible(true) : setIsCardOpen(false);
    })

    const cardDetails = () => {
        if (isCardOpen === true) {
            return <CardDetails isCardOpen={isCardOpen} card_task={card_task} difficulty={difficulty} />
        } else {
            return null
        }
    }

    return (
        <div onClick={cardOpenCheck} className={`card-styling card-container ${isCardOpen ? 'open' : ''}`}>
            <h2 className='londrina-solid-regular'>{name}</h2>
            <div className={`card-content ${isCardOpen ? 'visible' : ''}`}>
                {cardDetails()}
            </div>
        </div>
    );
};