import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

interface TodoTask {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
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
