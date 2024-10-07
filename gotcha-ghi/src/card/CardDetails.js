import React from 'react';

export const CardDetails = ({ card_task }) => {

    return (
        <div>
            <p className='londrina-solid-light' style={{ border: 'solid', borderRadius: '10px', padding: '10px', margin: '10px' }}>{card_task}</p>
        </div>
    );
};