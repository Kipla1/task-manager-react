import { useEffect, useState } from 'react';
import './App.css';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';
import Footer from './Footer';


function App() {
  const apiUrl = 'http://localhost:3000/tasks';
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // at the point of loading, this is true

  console.log('trial 1');

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []); // dependency array

  console.log('trial');
  console.log(tasks);

  const addTask = (newTask) => {
    setTasks((previousTasks) => [newTask, ...previousTasks]);
  };

  return (
    <div>
      {/* <Navbar /> */}
      <h1>Gladiator's Task Manager</h1>
      <TaskInputForm addTask={addTask} />
      <h2>Task List</h2>
      {isLoading ? <>Loading...</> : <TaskList tasks={tasks} />}
      <Footer />
    </div>
  );
}

export default App;
