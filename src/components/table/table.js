import React from 'react';
import './table.css';

const table = ({head, rows}) => {
  const ths = head.map((item, index) => {
    return (<th key={index}>{item}</th>)
  });
  const tds = !rows.length ? (<tr><td key="zero" colSpan={head.length}>История операций отсутствуют!</td></tr>) : (
    rows.map((row, index) => {
      const values = Object.values(row).map((item, i) => {
        const key = `${index}.${i}`;
        return (<td key={key}>{item}</td>)
      });
      return (<tr key={`tr${index}`}>{values}</tr>);
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