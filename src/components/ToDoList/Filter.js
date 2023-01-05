import { React, useState, useEffect } from "react";
import ToDoList from "./ToDoList";

function Filter({ filter, setFilter }) {
  return (
    <div className="row justify-content-center">
      <input
        placeholder="Filtrele"
        className="col-8"
        type="text"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
    </div>
  );
}

export default Filter;
