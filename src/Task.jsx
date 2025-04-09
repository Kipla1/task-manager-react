function Task({ title, description }) {
  // default values in props
  // return content
  return (
    <div>
      <div className='task-info'>
        <h3>{title}</h3>
        <p>{description}</p>
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
