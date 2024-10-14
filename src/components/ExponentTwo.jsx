import React from "react";

const ExponentTwo = ({ num }) => {
  const exponent = 2;
  const result = Math.pow(num, exponent);

  return (
    <div className="exponent-box">
      <h3>
        {num}
        <sup>{exponent}</sup> = {result}
      </h3>
      <p>
        {num} * {num} = {result}
      </p>
    </div>
  );
};

export default ExponentTwo;
