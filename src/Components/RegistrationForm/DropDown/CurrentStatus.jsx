import React, { useState } from 'react';
import { Dropdown, Button, Input, Modal } from 'antd';

const CurrentStatus = () => {
  const [currentStatus, setCurrentStatus] = useState('Choose Status'); // Default status
  const [isModalVisible, setIsModalVisible] = useState(false); // For modal visibility
  const [userInput, setUserInput] = useState(''); // For storing user input

  const items = [
    {
      key: '1',
      label: 'Option 1',
    },
    {
      key: '2',
      label: 'Option 2',
    },
    {
      key: '3',
      label: 'Option 3',
    },
  ];

  const handleMenuClick = (e) => {
    const selectedOption = items.find(item => item.key === e.key)?.label;
    
    if (selectedOption === 'Option 3') {
      // Show modal for custom input when Option 3 is selected
      setIsModalVisible(true);
    } else {
      setCurrentStatus(selectedOption || 'Choose Status'); // Update the current status
    }
  };

  const handleOk = () => {
    setCurrentStatus(userInput || 'Choose Status'); // Update status with user input
    setIsModalVisible(false); // Close modal
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Close modal without changing status
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className='pt-4'>
        <label htmlFor="status-dropdown">Current Status:</label>
        <Dropdown
          menu={{ items, onClick: handleMenuClick }}
          trigger={['click']}
          id="status-dropdown"
        >
          <Button>{currentStatus}</Button>
        </Dropdown>
      </div>

      {/* Modal for user input */}
      <Modal
        title="Enter Custom Status"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your status"
        />
      </Modal>
    </div>
  );
};

export default CurrentStatus;
