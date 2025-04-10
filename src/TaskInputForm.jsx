function TaskInputForm() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('I was clicked');
    console.log(1 + 1);
  };

  return (
    <>
      <form className='task-form'>
        <input type='text' placeholder='Title' className='input' />
        <textarea placeholder='Description' className='input textarea' />
        <button type='submit' className='btn add-btn' onClick={handleClick}>
          Add Task
        </button>
        {/* <button type='submit' className='btn add-btn' onClick={handleClick()}>
          Add Task
        </button> */}
      </form>
    </>
  );
}

export default TaskInputForm;