import React from 'react';
import './button.css';

const button = ({text, onClick, className, icon}) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <span className="button__text">
        {icon ? icon : ''}
        {text}
      </span>
    </button>
  );
};

export default button;