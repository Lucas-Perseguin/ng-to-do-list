import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss'],
})
export class TodoInputAddItensComponent {
  @Input() inputText: string = '';

  @Output() newItemEvent = new EventEmitter<string>();

  public keyPressEventHandler(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.newItemEvent.emit(this.inputText);
      this.inputText = '';
    }
  }
}
