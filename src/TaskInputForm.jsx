function TaskInputForm() {
  return (
    <>
      <form className='task-form'>
        <input type='text' placeholder='Title' className='input' />
        <textarea placeholder='Description' className='input textarea' />
        <button type='submit' className='btn add-btn'>
          Add Task
        </button>
      </form>
    </>
  );
}

export default TaskInputForm;
