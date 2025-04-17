import React from 'react';
import Task from './Task';

function TaskList({ tasks }) {
  const mappedData = tasks.map((task) => {
    return (
      <Task key={task.id} task={task} />
    );
  });

  return (
    <div className='task-list'>
      {/* map over our array of tasks */}
      {mappedData}
    </div>
  );
}

export default TaskList;
