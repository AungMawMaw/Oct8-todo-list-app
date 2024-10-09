import { Injectable } from '@angular/core';
import { TodoList } from './todo-list.model';

export class ServiceTodoLists {
  @Injectable({ providedIn: 'root' })
  private TodoTasks: TodoList[] = [
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
    return [...this.TodoTasks];
  }
}
