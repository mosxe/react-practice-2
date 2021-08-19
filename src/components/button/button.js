import React from 'react';

const button = ({text, onClick}) => {
  return (
    <button className="counter-content__button" onClick={onClick}>
      {text}
    </button>
  );
};

export default button;