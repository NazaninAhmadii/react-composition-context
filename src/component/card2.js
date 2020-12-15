import React from 'react';
import { card2 } from '../data';

const Card2 = () => {
  return (
    <React.Fragment>
      <h3>{card2.title}</h3>
      <img src={card2.img} alt="grape" />
    </React.Fragment>

  );
};

export default Card2;