import React, {Component} from 'react';
import './input.css'

export default class Input extends Component {
  onChangeCounter = (event) => {
    const value = +event.target.value;
    this.props.onChangeCounter(value);
  }
  render() {
    const {type, name, value} = this.props;
    return (
      <div className="input">
        <label className="input__label">
          {name}
        </label>
        <input type={type} className="input__block"
          value={value || ''} 
          onChange={this.onChangeCounter}
        />
      </div>
    );
  }
}