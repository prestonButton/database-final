/* eslint-disable react/prop-types */

import "./table.css";

const Table = (props) => {
  return (
    <>
      <h2>{props.Tname}</h2>
      <table>
        <thead>
          <tr>
            {props.Tcols.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
            <th>+/-</th>
          </tr>
        </thead>
        <tbody>
          {props.Trows.map((row, index) => (
            <tr key={index}>
              {row.map((data, index) => (
                <td key={index}>{data}</td>
              ))}
              <button className='delete'>&times;</button>
            </tr>
          ))}
          <tr>
            {props.Tcols.map((col, index) => (
              <td key={index}>
                <input placeholder={col}/>
              </td>
            ))}
            <button className='add'>+</button>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
