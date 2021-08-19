import React, {useEffect, useState} from 'react';
import './input.css'

const Input = ({onChangeCounter, name, type}) => {
  const [value, setValue] = useState('');
  const onChange = (event) => {
    const value = !event.target.value ? '' : +event.target.value; 
    setValue(value);
    onChangeCounter(value);
  };

  return (
    <div className="input">
      <label className="input__label">
        {name}
      </label>
      <input type={type} className="input__block"
        value={value} 
        onChange={onChange}
      />
    </div>
  );
};

export default Input;