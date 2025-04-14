import React, { useState } from 'react';

function Counter() {
  // we set state using react's useState hook
  // set the initial state of our count
  // useState will enable us to track the changes in the state
  // two values --> count, setCount
  // useState will always have two values:
  // 1. current state value --> initial values --> count --> 0
  // 2. function to update the state --> setCount
  // therefore setCount is used to update count in our example

  // scenarios
  // 1. when button is clicked our new count should be 2
  // 2. when button is clicked our new count will be incremented by 1

  const [count, setCount] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);
  // const [isVisible, setIsVisible] = useState(false);
  // const [name, setName] = useState('John Doe');
  // const [age, setAge] = useState(30);
  const handleIncrement = () => {
    console.log('Increment button clicked');
    setCount(count + 1); // option 1 --> works
    // setCount(count++); // option 2 --> doesn't work --> giving us a TypeError
  };
  return (
    <div>
      <h2>Counter</h2>
      <p>current count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
