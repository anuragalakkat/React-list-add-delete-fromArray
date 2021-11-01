import React from 'react';
import TaskStore from './TaskStore';
import { observer } from 'mobx-react-lite';

const List = () => {
  const { tasks, deleteTask } = TaskStore;

  return (
    <>
      <h1>LIST ITEMS</h1>
      {tasks.map((t) => {
        return (
          <div>
            <p>title: {t.title}</p>
            <p>Description: {t.description}</p>
            <button onClick={() => deleteTask(t)}>X</button>
          </div>
        );
      })}
    </>
  );
};

export default observer(List);
