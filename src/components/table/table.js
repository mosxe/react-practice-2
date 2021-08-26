import React from 'react';
import './table.css';

const table = ({head, rows, deleteItem}) => {
  const ths = head.map((item, index) => {
    return (<th key={`th_${index}`}>{item}</th>)
  });
  const tds = !rows.length ? (<tr><td key="zero" colSpan={head.length}>История операций отсутствуют!</td></tr>) : (
    rows.map(({id, items}, index) => {
      const values = items.map(val => {
        return Object.values(val).map((item, i) => {
          const key = `${index}.${i}`;
          return (<td key={key}>{item}</td>)
        });
      });
      return (<tr key={id}>{values}</tr>);
    })

  );
  return (
    <table>
      <thead>
        <tr>
          {ths}
        </tr>
      </thead>
      <tbody>
        {tds}
      </tbody>
    </table>
  );
}

export default table;