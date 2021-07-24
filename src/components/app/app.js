import React, {Component} from 'react';
import './app.css';

import Input from '../input';
import Button from '../button';

export default class App extends Component {
  state = {
    counter: 0
  };
  render() {
    const {counter} = this.state;
    return (
      <div className="App">
        <div className="block-actions">
          <Input />
          <span>{counter}</span>
          <Button name={'-'}/>
          <Button name={'+'}/>
        </div>
      </div>)
  }
}