import React from 'react';
import { card3 } from '../data';

const Card3 = () => {
    return (
        <React.Fragment>
            <h3>{card3.title}</h3>
            <img src={card3.img} alt="grape" />
        </React.Fragment>
    )
}

export default Card3;