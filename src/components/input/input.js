import React, {Component} from 'react';
import './input.css'

export default class Input extends Component {
  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className="input">
        <label className="input__label">
          Введите значение:
          </label>
          <input type="text" className="input__block"/>
          {/* value={this.state.value} onChange={this.handleChange} */}
       
      </div>
    );
  }
}