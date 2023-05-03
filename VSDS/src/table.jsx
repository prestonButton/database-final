/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./table.css";

const Table = (props) => {
  const [formData, setFormData] = useState({});

  const handleDelete = (index) => {
    props.onDelete(index);
  };

  const handleAdd = () => {
    const inputs = Array.from(
      document.querySelectorAll(`input[placeholder^='${props.Tname}']`)
    );
    const newData = inputs.map((input) => input.value);
    props.onAdd(newData);

    // Reset the form by setting the value of each input to an empty string
    inputs.forEach((input) => (input.value = ""));
  };


  const handleInputChange = (event, col) => {
    const { value } = event.target;
    setFormData({ ...formData, [col]: value });
  };

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
              <td>
                <button
                  className="delete"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  &times;
                </button>
              </td>
            </tr>
          ))}
          <tr>
            {props.Tcols.map((col, index) => (
              <td key={index}>
                <input
                  placeholder={`${props.Tname} ${col}`}
                  onChange={(event) => handleInputChange(event, col)}
                />
              </td>
            ))}
            <td>
              <button className="add" onClick={handleAdd}>
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
