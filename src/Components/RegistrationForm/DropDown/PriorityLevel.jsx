import React,{useState} from 'react'
import { Dropdown,Button } from 'antd';

const PriorityLevel = () => {
    const [currentStatus, setCurrentStatus] = useState('Choose Status'); // Default status

  const items = [
    {
      key: '1',
      label: 'Option A',
    },
    {
      key: '2',
      label: 'Option B',
    },
    {
      key: '3',
      label: 'Option C',
    },
  ];

  const handleMenuClick = (e) => {
    const selectedOption = items.find(item => item.key === e.key)?.label;
    setCurrentStatus(selectedOption || 'Choose Status'); // Update the current status
  };
  return (
    <div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className='pt-4'>
      <label htmlFor="status-dropdown">Priority Level:</label>
      <Dropdown
        menu={{ items, onClick: handleMenuClick }}
        trigger={['click']}
        id="status-dropdown"
      >
        <Button>{currentStatus}</Button>
      </Dropdown>
    </div>
  </div>
  )
}

export default PriorityLevel