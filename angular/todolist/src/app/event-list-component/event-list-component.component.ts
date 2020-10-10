import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item';

@Component({
  selector: 'app-event-list-component',
  template: `
    <p>
      event-list-component works!
    </p>
  `,
  styles: [
  ]
})
export class EventListComponentComponent implements OnInit {

  constructor() {
    this.items = [
      new Item("Buy pendrives"),
      new Item("Buy backpacks"),
      new Item("Rent projectors")
  ];
  
   }

  ngOnInit(): void {
  }
  items : Item[];

}
