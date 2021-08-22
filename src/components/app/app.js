import React, { useState } from 'react';
import './app.css';
import Counter from '../counter';
import Input from '../input';
import Table from '../table';

const App = () => {
  const tableHead = ['Изначальное значение', 'Шаг счетчика', 'Полученное значение', 'Действие'];
  const [step, setStep] = useState(null);
  const [rows, setRows] = useState([]);

  const changeCounter = (event) => {
    const value = !event.target.value ? '' : +event.target.value; 
    setStep(value);
  };

  const actionPlusTable = () => {
    const startCounter = rows.length === 0 ? 0 : rows[rows.length-1].end_counter;
    const stepCounter = step ? step : 1;
    const endCounter = startCounter + stepCounter;
    const newRow = { 
      start_counter: startCounter,
      step_counter: stepCounter,
      end_counter: endCounter,
      action: 'Увеличили'
    };
    setRows((rows) => [...rows, newRow]);
  };

  const actionMinusTable = () => {
    const startCounter = rows.length === 0 ? 0 : rows[rows.length-1].end_counter;
    const stepCounter = 1;
    const endCounter = startCounter  - stepCounter;
    const newRow = { 
      start_counter: startCounter,
      step_counter: stepCounter,
      end_counter: endCounter,
      action: 'Уменьшили'
    };
    setRows((rows) => [...rows, newRow]);
  };
  return (
    <div className="App">
      <div className="block-actions">
        <Input type="number" name="Введите значение:"
          onChange={changeCounter}/>
        <Counter step={step} onMinus={actionMinusTable} onPlus={actionPlusTable}/>
      </div>
      <Table head={tableHead} rows={rows}/>
    </div>
  );
}

export default App;