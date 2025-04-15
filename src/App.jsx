import { useEffect, useState } from 'react';
import './App.css';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';
import Footer from './Footer';
import { myTasks } from './tasks';

function App() {
  const apiUrl = 'http://localhost:3000/tasks';
  const [tasks, setTasks] = useState([]);
  // console.log(tasks);

  console.log('trial 1');

  useEffect(() => {
    // logic here for side effects
    // like fetching data from an API or local storage
    // console.log('Component mounted or updated');

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setTasks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // dependency array

  console.log('trial');
  console.log(tasks)

  const addTask = (newTask) => {
    setTasks((previousTasks) => [newTask, ...previousTasks]);
  };

  return (
    <div>
      <h1>Gladiator's Task Manager</h1>
      <TaskInputForm addTask={addTask} />
      <h2>Task List</h2>
      <TaskList tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;
