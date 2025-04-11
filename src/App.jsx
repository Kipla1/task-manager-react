import './App.css';
import Counter from './Counter';
// import Counter from './Counter';
import Task from './Task';
import TaskInputForm from './TaskInputForm';
import TaskList from './TaskList';

// component name --> App
// returns h1 content
// export the component as a default export
function App() {
  return (
    <div>
      <h1>Gladiator's Task Manager</h1>
      {/* section for submitting tasks with title and description */}
      <TaskInputForm />
      {/* <Counter /> */}
      <Counter />

      <h2>Task List</h2>
      {/* section for listing all our tasks */}
      <TaskList />
    </div>
  );
}

export default App;
