import React, { useState } from 'react';
import { Input, Select, Tag } from 'antd';

const ToolsAndTech = () => {
  const [selectedTools, setSelectedTools] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSelect = (value) => {
    if (!selectedTools.includes(value)) {
      setSelectedTools([...selectedTools, value]);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddCustomTool = (e) => {
    e.preventDefault(); // Prevent page reload or form submission
    if (inputValue && !selectedTools.includes(inputValue)) {
      setSelectedTools([...selectedTools, inputValue]);
      setInputValue('');
    }
  };

  const handleRemove = (removedTag) => {
    setSelectedTools(selectedTools.filter(tag => tag !== removedTag));
  };

  return (
    <div>
      <label>Tools and Technology used:</label>
      
      {/* Dropdown to select tools */}
      <Select
        placeholder="Select tools and technology"
        style={{ width: 200 }}
        onSelect={handleSelect}
        allowClear
      >
        <Select.Option value="React">React</Select.Option>
        <Select.Option value="Node.js">Node.js</Select.Option>
        <Select.Option value="MongoDB">MongoDB</Select.Option>
        <Select.Option value="Express">Express</Select.Option>
        <Select.Option value="Ant Design">Ant Design</Select.Option>
      </Select>

      {/* Input for custom typing */}
      <Input
        placeholder="Or type a custom tool"
        value={inputValue}
        onChange={handleInputChange}
        onPressEnter={handleAddCustomTool}
        style={{ width: 200, marginTop: 10 }}
      />
      <button onClick={handleAddCustomTool} style={{ marginTop: 10 }}>
        Add Custom Tool
      </button>

      {/* Display selected tools as tags */}
      <div style={{ marginTop: 10 }}>
        {selectedTools.map((tool, index) => (
          <Tag
            key={index}
            closable
            onClose={() => handleRemove(tool)}
            style={{ margin: 5 }}
          >
            {tool}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default ToolsAndTech;
