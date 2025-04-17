import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function SingleTask() {
  const location = useLocation();
  const data = location.state;
  console.log(location.state);
  return (
    <div>
      <Link to={'/'} > Go back to home</Link>

      <h1>Title: {data.title} </h1>
      <h2>Description: {data.description} </h2>
      {data.completed ? (
        <button>Mark as Incomplete</button>
      ) : (
        <button>Mark as Complete</button>
      )}
    </div>
  );
}

export default SingleTask;
