import React from 'react';

const PropData = ({ name = "" }) => {
  const words = name.split(' ');
  return (
    <div>
      <h2 className="font-bold text-4xl text-center mt-4">
        {words.map((word, index) => (
          <span key={index} className={index === 0 ? 'text-white' : 'text-yellow-500'}>
            {word.charAt(0).toUpperCase() + word.slice(1).toUpperCase()}&nbsp;
          </span>
        ))}
      </h2>
    </div>
  );
};

export default PropData;
