import React from "react";
import { Rate } from "antd";
import "antd/dist/antd.css";

const Rater = ({ rating }) => {
  return (
    <div>
      <Rate rating={rating} disabled value={rating} />
    </div>
  );
};

export default Rater;
