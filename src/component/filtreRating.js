import React from "react";
import { Rate } from "antd";

const Rater = ({ value, setvalue }) => {
  const handleChange = (value) => {
    setvalue(value);
  };

  return (
    <div className="style1">
      <Rate onChange={handleChange} value={value} />
    </div>
  );
};
export default Rater;
