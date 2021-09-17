import React, { useState, useEffect } from 'react';
import './app.css';
import Counter from '../counter';
import Button from '../button';
import Input from '../input';
import Table from '../table';
import TableCell from '../table-cell';
import { FaTrash } from 'react-icons/fa';

const trashIcon = <FaTrash color="red" cursor="pointer"/>;

const App = () => {
  const tableHead = ['Изначальное значение', 'Шаг счетчика', 'Полученное значение', 'Действие', 'Удалить'];
  const [step, setStep] = useState(null);
  const [rows, setRows] = useState([]);
  const [countRecords, setCountRecords] = useState(0);
  const [deleteRecords, setDeleteRecords] = useState([]);

  const changeCounter = (event) => {
    const value = +event.target.value || '';
    setStep(value);
  };

  const actionPlusTable = () => {
    const startCounter = rows.length === 0 ? 0 : rows[rows.length-1].end_counter;
    const stepCounter = step ? step : 1;
    const endCounter = startCounter + stepCounter;
    const idRow = getId();
    const newRow = {
      id: idRow,
        start_counter: Number(startCounter),
        step_counter: Number(stepCounter),
        end_counter: Number(endCounter),
        action: 'Увеличили'
    };
    setRows((rows) => [...rows, newRow]);
  };

  const actionMinusTable = () => {
    const startCounter = rows.length === 0 ? 0 : rows[rows.length-1].end_counter;
    const stepCounter = step ? step : 1;
    const endCounter = startCounter  - stepCounter;
    const idRow = getId();
    const newRow = {
      id: idRow,
        start_counter: Number(startCounter),
        step_counter: Number(stepCounter),
        end_counter: Number(endCounter),
        action: 'Уменьшили'
    };
    setRows((rows) => [...rows, newRow]);
  };

  const deleteItem = (id, rows) => {
    setRows((rows) => {
      let deleteRow = rows.find(i => i.id === id);
      setDeleteRecords((deleteRows) => [...deleteRows, deleteRow]);
      return rows.filter(i => i.id !== id);

    });
    setCountRecords((count) => count + 1);
  };

  const refreshIds = (rows)=> {
    const updateIdsRows = rows.map((item, index) => {
      item.id = index;
      return item;
    });
    return updateIdsRows;
  }

  const restoreRows = () => {
    const newArrayRows = [...rows];
    deleteRecords.forEach(item => {
      newArrayRows.splice(item.id, 0, item);
      
    });
    const newUpdateIdsRows = refreshIds(newArrayRows);
    setCountRecords(0);
    setDeleteRecords([]);
    setRows(newUpdateIdsRows);
  };

  const getId = () => {
    const id = rows.length === 0 ? 0 : rows[rows.length-1].id + 1;
    return id;
  };


  return (
    <div className="App">
      <div className="block-actions">
        <div className="block-actions actions-conteiner">
          <Input type="number" name="Введите значение:"
            onChange={changeCounter}/>
          <Counter step={step} onMinus={actionMinusTable} onPlus={actionPlusTable}/>
        </div>
        <div className="block-actions delete-conteiner">
          <div className="delete-conteiner__name">Всего записей в архиве: <span>{countRecords}</span></div>
          <Button className="delete-conteiner__button" text="Восстановить" onClick={() => restoreRows()}/>
        </div>
      </div>
      <Table head={tableHead}> 
        {rows.map((item, index) => {
          return (
            <tr key={index}>
              <TableCell id={item.id}>
                {item.start_counter}
              </TableCell>
              <TableCell id={item.id}>
                {item.step_counter}
              </TableCell>
              <TableCell id={item.id}>
                {item.end_counter}
              </TableCell>
              <TableCell id={item.id}>
                {item.action}
              </TableCell>
              <TableCell id={item.id}>
                <Button text="Delete" icon={trashIcon} onClick={() => deleteItem(item.id)}/>
              </TableCell>
            </tr>
          )
        })}
      </Table>
    </div>
  );
}

export default App;