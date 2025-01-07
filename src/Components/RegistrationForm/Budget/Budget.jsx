import React, { useState } from 'react';
import Input from 'antd/es/input/Input';

const Budget = () => {
  const [budget, setBudget] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Remove any non-numeric characters except for '₹'
    const numericValue = value.replace(/[^\d]/g, '');
    // Update the state with 'Rs' prefixed
    setBudget(numericValue ? `Rs. ${numericValue}` : '');
  };

  return (
    <div>
      <label htmlFor="budget">Budget:</label>
      <Input
        id="budget"
        placeholder="Enter Budget"
        value={budget}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Budget;
