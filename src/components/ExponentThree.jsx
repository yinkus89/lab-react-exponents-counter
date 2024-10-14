import React from "react";

const ExponentThree = ({ num }) => {
  const exponent = 3;
  const result = Math.pow(num, exponent);

  return (
    <div className="exponent-box exponent-three">
      {" "}
      {/* Add the specific class here */}
      <h3>
        {num}
        <sup>{exponent}</sup> = {result}
      </h3>
      <p>
        {num} * {num} * {num} = {result}
      </p>
    </div>
  );
};

export default ExponentThree;
