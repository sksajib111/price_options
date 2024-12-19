import React from 'react';

const PriceOption = ({option}) => {
  const {name, features, price} = option;
  return (
    <div>
      <h2>
        <span className='text-7xl'>{price}</span>
        <span className='text-3xl'>/mon</span>
        </h2>
    </div>
  );
};

export default PriceOption;