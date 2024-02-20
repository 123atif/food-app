import React from "react";
const Heading = ({ Heading }) => {
  const words = Heading.split(" ");
  const firstWord = words[0];
  const secondWord = words.slice(1).join(" ");
  return (
    <div>
      <h2 className="font-bold text-4xl text-center mb-7 text-white">
        <span className="text-white">{firstWord}</span>
        <span className="text-yellow-500">{secondWord}</span>
      </h2>
    </div>
  );
};

export default Heading;
