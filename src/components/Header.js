import React from 'react'
import Button from './Button';

const Header = ({ setShowAddTask, showAddTask }) => {
  return (
    <>
      <div className='header' >TASK-TRACKER</div>
      <Button showAddTask={showAddTask} setShowAddTask={setShowAddTask} />
    </>
  );
};

export default Header