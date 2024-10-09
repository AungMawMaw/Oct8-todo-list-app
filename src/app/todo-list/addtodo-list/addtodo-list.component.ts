import { Component, EventEmitter, Output } from '@angular/core';
import { TodoList } from '../todo-list.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addtodo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtodo-list.component.html',
  styleUrl: './addtodo-list.component.css',
})
export class AddtodoListComponent {
  enteredname = '';
  @Output() data = new EventEmitter<TodoList>();

  onClickAdd() {
    let tmp: TodoList = {
      id: new Date().getTime().toString(),
      name: this.enteredname,
      completed: false,
    };
    this.data.emit(tmp);
  }
}
