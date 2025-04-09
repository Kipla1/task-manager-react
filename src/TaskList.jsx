import React from 'react';
import Task from './Task';

const tasks = [
  {
    // id: 1,
    title: 'Task 1',
    description: 'This is the first task.',
    completed: false,
  },
  {
    // id: 2,
    title: 'Task 2',
    description: 'This is the second task.',
    completed: true,
  },
  {
    // id: 3,
    title: 'Task 3',
    description: 'This is the third task.',
    completed: false,
  },
  {
    id: 4,
    title: 'Task 4',
    description: 'This is the fourth task.',
    completed: true,
  },
  {
    id: 5,
    title: 'Task 5',
    description: 'This is the fifth task.',
    completed: false,
  },
];

function TaskList() {
  const mappedData = tasks.map((task) => {
    console.log(task);
    return (
      <Task key={task.id} title={task.title} description={task.description} />
    );
  });

  return (
    <div className='task-list'>
      {/* <Task title='task title trial' description='task description trial' />
       <Task title={title} description={description} /> 
       <Task />
      <Task />
      <Task /> */}
      {/* map over our array of tasks */}
      {mappedData}
    </div>
  );
}

export default TaskList;
