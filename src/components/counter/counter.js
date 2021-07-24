import React, {Component} from 'react';
import './counter.css';

export default class Counter extends Component {
  state = {
    counter: 0
  };

  onPlus = () => {
    const {step} = this.props;
    const stepCounter = step === '' || step === 0 ? 1 : step;
    const counter = this.state.counter + stepCounter;
    this.setState({counter: counter});
    this.props.onPlus(stepCounter, counter);
  };

  onMinus = () => {
    const {step} = this.props;
    const stepCounter = step === '' || step === 0 ? 1 : step;
    const counter = this.state.counter - stepCounter;
    this.setState({counter: counter});
    this.props.onMinus(stepCounter, counter);
  };

  render() {
    const step = this.props.step || 0;
    return (
      <div className="counter-content">
        <button className="counter-content__button" onClick={this.onPlus}>
          +
        </button>
        <div className="counter-content__step">{step}</div>
        <button className="counter-content__button" onClick={this.onMinus}>
          -
        </button>
      </div>
    )
  }
};