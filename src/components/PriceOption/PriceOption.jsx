import React from "react";

const PriceOption = ({ option }) => {
  const { name, features, price } = option;
  return (
    <div className="bg-indigo-400 rounded-lg p-4 text-white">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center">{name}</h4>
    </div>
  );
};

export default PriceOption;
