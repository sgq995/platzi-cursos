import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'angular-platzi-store';

  power = 10;

  items = ['Sebas', 'Paco', 'Ivan'];

  object = {};

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.items.push('Nuevo Item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}
