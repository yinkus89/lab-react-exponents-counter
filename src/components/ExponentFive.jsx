import React from "react";

const ExponentFive = ({ num }) => {
  const exponent = 5;
  const result = Math.pow(num, exponent);

  return (
    <div className="exponent-box">
      <h3>
        {num}
        <sup>{exponent}</sup> = {result}
      </h3>
      <p>
        {num} * {num} * {num} * {num} * {num} = {result}
      </p>
    </div>
  );
};

export default ExponentFive;
