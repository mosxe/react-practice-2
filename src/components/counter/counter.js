import React from 'react';
import Button from '../button';
import './counter.css';

const Counter = ({step, onMinus, onPlus}) => {
    return (
      <div className="counter-content">
          <Button className="counter-content__button" text="+" onClick={onPlus} />
        <div className="counter-content__step">{step}</div>
          <Button className="counter-content__button" text="-" onClick={onMinus} />
      </div>
    )
};

export default Counter;
