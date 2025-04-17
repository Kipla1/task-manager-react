import { useNavigate } from 'react-router-dom';

function Task({ task }) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    // Navigate to the SingleTask page with the task ID
    navigate(`/task/${task.id}`, { state: task });
  };

  return (
    <div onClick={handleNavigation}>
      <div className='task-info'>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className='task-actions'>
        <button className='btn edit-btn'>Edit</button>
        <button className='btn delete-btn'>Delete</button>
        <button className='btn complete-btn'>Mark as Complete</button>
      </div>
    </div>
  );
}

export default Task;
