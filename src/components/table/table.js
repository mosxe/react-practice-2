import React from 'react';
import './table.css';

const table = ({head, rows, children}) => {
  const ths = head.map((item, index) => {
    return (<th key={`th_${index}`}>{item}</th>)
  });
  return (
    <table>
      <thead>
        <tr>
          {ths}
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

export default table;