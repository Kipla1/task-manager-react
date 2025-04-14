import { useState } from 'react';
import './App.css';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';
import Footer from './Footer';

const myTasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'This is the first task.',
    completed: false,
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'This is the second task.',
    completed: true,
  },
  {
    id: 3,
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

function App() {
  const [tasks, setTasks] = useState(myTasks);
  console.log(tasks);

  const addTask = (newTask) => {
    setTasks((previousTasks) => [newTask, ...previousTasks]);
  };

  return (
    <div>
      <h1>Gladiator's Task Manager</h1>
      <TaskInputForm addTask={addTask} />
      <h2>Task List</h2>
      <TaskList tasks={tasks} />
      <Footer/>
    </div>
  );
}

export default App;
