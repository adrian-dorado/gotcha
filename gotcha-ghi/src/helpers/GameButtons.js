import React from 'react'

export const GameButtons = ({ onClick }) => {

    return (
        <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'flex-end'}}>
            <div>
                <button style={{margin: "10px"}} className='button' onClick={onClick} type='button'>START GAME!</button>
                <button  style={{margin: '10px'}} className='button' type='button'>??</button>
            </div>
        </div>
    );
};