import React from "react";

const PriceOption = ({ option }) => {
  const { name, features, price } = option;
  return (
    <div className="flex mx-auto">
      <span className="text-3xl text-red-400">{name}</span>
      <h2>
        <span className="text-7xl">{price}</span>

        <span className="text-3xl">/mon</span>
      </h2>
      <div>
        <span className="text-2xl text-gray-500">{features}</span>
      </div>
    </div>
  );
};

export default PriceOption;
