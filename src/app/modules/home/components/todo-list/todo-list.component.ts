import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public list: Array<{ checked: boolean; task: string }> = [];

  public check(index: number) {
    this.list[index].checked = !this.list[index].checked;
    if (this.list[index].checked) {
      const item = this.list.splice(index, 1);
      this.list.push(item[0]);
    } else {
      const item = this.list.splice(index, 1);
      this.list.unshift(item[0]);
    }
  }

  public delete(index: number) {
    this.list.splice(index, 1);
  }

  public addItem(newItem: string) {
    this.list.unshift({ checked: false, task: newItem });
  }

  public deleteAllItens() {
    this.list = [];
  }
}
