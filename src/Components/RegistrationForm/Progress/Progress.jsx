import React, { useState } from "react";
import Input from "antd/es/input/Input";

const Progress = () => {
  const [progress, setProgress] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    // Remove any existing % sign to avoid duplication
    value = value.replace(/%/g, "").trim();
    // Ensure only numbers are accepted
    if (!isNaN(value) && value !== "") {
      setProgress(`${value}%`);
    } else if (value === "") {
      setProgress("");
    }
  };

  return (
    <div>
      <label htmlFor="progress">Progress:</label>
      <Input
        id="progress"
        placeholder="Enter Your Progress"
        value={progress}
        onChange={handleChange}
      />
    </div>
  );
};

export default Progress;
