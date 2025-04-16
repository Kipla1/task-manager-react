import { useState } from 'react';

function TaskInputForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const newTask = {
      title: title,
      description: description,
      completed: false,
    };

    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        addTask(data);
        setTitle('');
        setDescription('');
        setTimeout(() => {
          setIsSubmitting(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        setIsSubmitting(false);
      });
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
