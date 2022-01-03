import React, { useState } from "react";

const Filter = ({ setInputT, inputT }) => {
  const handleChange = (e) => {
    setInputT(e.target.value);
  };

  return (
    <div className="filter">
      <label htmlFor="#filter" style={{ color: "yellow" }}>
        Filter
      </label>
      <input id="filter" value={inputT} onChange={handleChange} />
    </div>
  );
};

export default Filter;
