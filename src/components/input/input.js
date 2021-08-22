import React from 'react';
import './input.css'

const Input = ({onChange, name, type}) => {
  return (
    <div className="input">
      <label className="input__label">
        {name}
      </label>
      <input type={type} className="input__block"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;