/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./table.css";

const Table = (props) => {
  const initialFormData = props.Tcols.reduce((acc, col) => {
    acc[col] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormData);

  const handleDelete = (primaryKey) => {
    props.onDelete(primaryKey);
  };

const handleAdd = () => {
  const newData = props.Tcols.map((col) => formData[col]);
  props.onAdd(newData);

  // Reset the formData
  const emptyFormData = props.Tcols.reduce((acc, col) => {
    acc[col] = "";
    return acc;
  }, {});
  setFormData(emptyFormData);
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
                    const primaryKeyIndex = props.Tcols.indexOf(
                      props.primaryKeyField
                    );
                    handleDelete(row[primaryKeyIndex]);
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
                  placeholder={`${col}`}
                  value={formData[col] || ""}
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
