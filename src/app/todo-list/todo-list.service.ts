import { Injectable } from '@angular/core';
import { TodoList } from './todo-list.model';

@Injectable({ providedIn: 'root' })
export class ServiceTodoLists {
  private TodoList: TodoList[] = [
    {
      id: '1',
      name: 'task1',
      completed: true,
      // date: '2025-12-31',
    },
    {
      id: '2',
      name: 'task2',
      completed: false,
      // date: '2025-12-31',
    },
    {
      id: '3',
      name: 'task3',
      completed: false,
      // date: '2025-12-31',
    },
    {
      id: '4',
      name: 'task1',
      completed: true,
      // date: '2025-12-31',
    },
    {
      id: '5',
      name: 'task2',
      completed: false,
      // date: '2025-12-31',
    },
    {
      id: '6',
      name: 'task3',
      completed: false,
      // date: '2025-12-31',
    },
  ];
  getAllTodoList() {
    return [...this.TodoList];
  }

  deleteTodo(value: string) {
    // console.log('on click del.. id ::' + value);
    this.TodoList = this.TodoList.filter((todolist) => todolist.id !== value);
  }
  //
  updateCompletedTodo(data: TodoList) {
    console.log('on change checked.. id ::' + { ...data });
    this.TodoList = this.TodoList.map((todolist) =>
      todolist.id === data.id
        ? { ...todolist, completed: data.completed }
        : todolist,
    );
  }
  AddTodo(data: TodoList) {
    console.log('on change checked.. id ::' + data.name);
    this.TodoList.push(data);
  }
}
