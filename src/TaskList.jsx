import React from 'react';
import Task from './Task';

function TaskList({ tasks }) {
  const mappedData = tasks.map((task) => {
    return (
      <Task key={task.id} title={task.title} description={task.description} />
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
