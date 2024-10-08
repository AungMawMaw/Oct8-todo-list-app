import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoTasks } from '../../data-todoTasks';

interface TodoTask {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ReactiveFormsModule, TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todotasks = TodoTasks;
  onClickDel(value: string) {
    console.log('on click del.. id ::' + value);
  }

  onCheckedChange(value: boolean) {
    console.log('on change checked.. id ::' + value);
  }

  taskForm: FormGroup;

  todoTask: TodoTask[] = [];

  constructor() {
    // Initialize the form group with form controls
    this.taskForm = new FormGroup({
      task: new FormControl('', [Validators.required]), // Required validation
    });
  }

  handleSubmit() {
    alert(this.taskForm.value.task);
  }
}
