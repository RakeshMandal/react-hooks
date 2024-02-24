import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(5);
  const [user, setUser] = useState([]);
  function decrementCount() {
    setCount((preCount) => preCount - 1);
  }
  function incementCount() {
    setCount((preCount) => preCount + 1);
  }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [count]);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incementCount}>+</button>
      <p>{user.name}</p>
    </div>
  );
}
