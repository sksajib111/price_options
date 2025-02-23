import React from "react";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, features, price } = option;
  return (
    <div className="bg-indigo-400 rounded-lg p-4 text-white">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center mb-10">{name}</h4>
      {
        features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
      }
    </div>
  );
};

export default PriceOption;
