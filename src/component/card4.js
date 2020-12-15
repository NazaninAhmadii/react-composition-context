import React from 'react';
import { card4 } from '../data';

const Card4 = () => {
    return (
        <div key="card4">
            <h3>{card4.title}</h3>
            <img src={card4.img} alt="grape" />
        </div>
    )
}

export default Card4;