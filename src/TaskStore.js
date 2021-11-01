import { makeAutoObservable } from 'mobx';

class TaskStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask = (value) => {
    this.tasks = [value, ...this.tasks];
    console.log(this.tasks);
  };

  deleteTask = (task) => {
    this.tasks = this.tasks.filter((i) => i.title !== task.title);
  };
}

const store = new TaskStore();
export default store;
