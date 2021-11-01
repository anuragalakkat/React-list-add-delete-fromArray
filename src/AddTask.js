import React, { useState } from 'react';
import TaskStore from './TaskStore';

const AddTask = () => {
  const [task, setTask] = useState({ title: '', description: '' });

  const { addTask } = TaskStore;

  const handleChange = (e) => {
    setTask({ ...task, title: e.target.value });
  };

  const handleDescription = (e) => {
    setTask({ ...task, description: e.target.value });
  };

  const handleAdd = () => {
    addTask(task);
  };

  return (
    <div>
      <h1>ADD ITEM</h1>
      Name:<input onChange={handleChange}></input>
      <br />
      Description:<input onChange={handleDescription}></input>
      <br />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export default AddTask;
