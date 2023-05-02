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
          </tr>
        </thead>
        <tbody>
          {props.Trows.map((row, index) => (
            <tr key={index}>
              {row.map((data, index) => (
                <td key={index}>{data}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
