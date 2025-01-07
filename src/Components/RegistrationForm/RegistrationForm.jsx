import { Input, } from 'antd'
import React from 'react'
import CurrentStatus from './DropDown/CurrentStatus.jsx'
import Progress from './Progress/Progress.jsx'
import Budget from './Budget/Budget.jsx'
import ProjectName from './ProjectName/ProjectName.jsx'
import PriorityLevel from './DropDown/PriorityLevel.jsx'
import ToolsAndTech from './ToolsandTech/ToolsAndTech.jsx'

const RegistrationForm = () => {
  return (
    // for main form
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form action="" className='"bg-white p-8 shadow-lg rounded-md w-full max-w-md'>

        {/* For Project Title */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Project Management Form
        </h2>

        {/* For Project ID */}
        <label htmlFor="">Project Id:</label> <Input placeholder='Enter Your Project ID' />

        {/* For Project Name */}
        <ProjectName/>

        {/* For Manager's Name */}
        <label htmlFor="">Manager Name:</label> <Input placeholder='Enter Your Manager(s) Name' />

        {/* For Team Member */}
        <label htmlFor="">Team Members:</label> <Input placeholder='Enter Your Team Members' />
       

        <CurrentStatus/>

        <Progress/>

        <PriorityLevel/>

        <Budget/>

        <label htmlFor="">Milestones Achieved:</label> <Input placeholder='Enter Your Name' />

        <label htmlFor="">Next Milestones:</label> <Input placeholder='Enter Your Name' />

        <label htmlFor="">Risk Challenges:</label> <Input placeholder='Enter Your Name' />

        <label htmlFor="">Client/Stakeholder:</label> <Input placeholder='Enter Your Name' />

        <ToolsAndTech/>

        <div className='flex pt-4 justify-around'>
          <div className=''>
            <button
              type="clear"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Clear all
            </button>
          </div>
          <div className='ml-4'>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>










      </form>
    </div>
  )
}

export default RegistrationForm