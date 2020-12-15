import React from 'react';
import { card1 } from '../data';

const Card1 = () => {
    return (
        <div>
            <h3>{card1.title}</h3>
            <img src={card1.img} alt="grape" />
        </div>
    )
}

export default Card1;