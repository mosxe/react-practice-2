import React, {Component} from 'react';
import './app.css';
import Counter from '../counter';
import Input from '../input';
import Table from '../table';

export default class App extends Component {
  tableHead = ['Изначальное значение', 'Шаг счетчика', 'Полученное значение', 'Действие'];
  state = {
    step: '',
    counter: 0,
    rows: []
  };

  onChangeCounter = (value) => {
    this.setState({step: value});
  };

  onPlus = (stepCounter, counter) => {
    const startCounter = this.state.rows.length === 0 ? 0 : 
      this.state.rows[this.state.rows.length-1].end_counter;
    const newRow = { 
      start_counter: startCounter,
      step_counter: stepCounter,
      end_counter: counter,
      action: 'Увеличили'};
    const rows = [...this.state.rows, newRow];
    this.setState({counter: counter, rows: rows});
  };

  onMinus = (stepCounter, counter) => {
    const startCounter = this.state.rows.length === 0 ? 0 : 
      this.state.rows[this.state.rows.length-1].end_counter;
    const newRow = {
      start_counter: startCounter,
      step_counter: stepCounter,
      end_counter: counter,
      action: 'Уменьшили'};
    const rows = [...this.state.rows, newRow];
    this.setState({counter: counter, rows: rows});
  };

  render() {
    const {counter, rows, step} = this.state;
    return (
      <div className="App">
        <div className="block-actions">
          <Input type="number" name="Введите значение:"
            value={this.state.step}
            onChangeCounter={this.onChangeCounter}/>
          <Counter step={step} onMinus={this.onMinus} onPlus={this.onPlus}/>
        </div>
        <Table head={this.tableHead} rows={rows}/>
      </div>)
  }
}