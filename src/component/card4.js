import React from 'react';
import { card4 } from '../data';

const Card4 = () => {
  return (
    <React.Fragment>
      <h3>{card4.title}</h3>
      <img src={card4.img} alt="grape" />
    </React.Fragment>
  );
};

export default Card4;