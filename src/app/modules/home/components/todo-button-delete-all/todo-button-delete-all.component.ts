import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-button-delete-all',
  templateUrl: './todo-button-delete-all.component.html',
  styleUrls: ['./todo-button-delete-all.component.scss'],
})
export class TodoButtonDeleteAllComponent {
  @Output() deleteAllItemsEvent = new EventEmitter<void>();

  public deleteAllItens() {
    const confirmation = confirm('Realmente deseja excluir todas as tarefas?');
    if (confirmation) this.deleteAllItemsEvent.emit();
  }
}
