import React from 'react';
import { card3 } from '../data';

const Card3 = () => {
    return (
        <div key="card3">
            <h3>{card3.title}</h3>
            <img src={card3.img} alt="grape" />
        </div>
    )
}

export default Card3;