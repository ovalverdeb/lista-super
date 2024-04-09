import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  shoppingList: { name: string; checked: boolean }[] = [];
  newItem: string = '';

  addItem() {
    if (this.newItem.trim() !== '') {
      this.shoppingList.push({ name: this.newItem, checked: false });
      this.newItem = ''; // Limpiar el campo después de agregar
    }
  }

  toggleItem(item: { name: string; checked: boolean }) {
    item.checked = !item.checked;
  }
  constructor() {}

}
