import { useState } from 'react';

function TaskInputForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();

    const newTask = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID
      title: title,
      description: description,
      completed: false,
    };

    console.log(newTask);
    addTask(newTask);
  };

  return (
    <>
      <form className='task-form'>
        <input
          type='text'
          placeholder='Title'
          className='input'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder='Description'
          className='input textarea'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type='submit'
          className='btn add-btn'
          disabled={isSubmitting}
          onClick={handleClick} // option 1
        >
          {isSubmitting ? 'Adding Task...' : 'Add Task'}
        </button>
      </form>
    </>
  );
}

export default TaskInputForm;
