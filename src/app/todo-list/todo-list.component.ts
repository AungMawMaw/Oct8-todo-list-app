import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoTasks } from '../../data-todoTasks';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { AddtodoListComponent } from './addtodo-list/addtodo-list.component';
import { NgFor } from '@angular/common';
import { ServiceTodoLists } from './todo-list.service';
import { TodoList } from './todo-list.model';

interface TodoTask {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TodoListItemComponent,
    AddtodoListComponent,
    NgFor,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  constructor(private todoservice: ServiceTodoLists) {}
  // todolist = TodoTasks;
  get todolist() {
    return this.todoservice.getAllTodoList();
  }

  onClickDel(value: string) {
    console.log('on click del.. id ::' + value);
    // this.todolist = this.todolist.filter((todolist) => todolist.id !== value);
    this.todoservice.deleteTodo(value);
  }
  //
  onCheckedChange(data: TodoList) {
    this.todoservice.updateCompletedTodo(data); // child hmar injact nae use ya tae..
  }
  onClickAdd(data: TodoList) {
    console.log('on change checked.. id ::' + data.name);
    // this.todolist.push(data);
    this.todoservice.AddTodo(data);
  }

  //
  // taskForm: FormGroup;
  //
  // todoTask: TodoTask[] = [];
  //
  // constructor() {
  //   // Initialize the form group with form controls
  //   this.taskForm = new FormGroup({
  //     task: new FormControl('', [Validators.required]), // Required validation
  //   });
  // }
  //
  // handleSubmit() {
  //   alert(this.taskForm.value.task);
  // }
}
