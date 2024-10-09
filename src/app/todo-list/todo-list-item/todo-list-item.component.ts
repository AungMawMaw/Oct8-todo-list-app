import { Component, Input, output } from '@angular/core';
import { TodoList } from '../todo-list.model';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css',
})
export class TodoListItemComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) completed!: boolean;
  clickDel = output<string>();
  // checkedChange = output<boolean>();
  checkedChange = output<TodoList>();
  //
  onDelete() {
    this.clickDel.emit(this.id);
  }
  //
  onCheckboxChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    let tmp = {
      id: this.id,
      name: this.name,
      completed: isChecked,
    };
    this.checkedChange.emit(tmp);
  }
}
