import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';

@Component({
  selector: 'app-mainlist',
  templateUrl: './mainlist.component.html',
  styleUrls: ['./mainlist.component.css']
})
export class MainlistComponent implements OnInit {

  items : Item[]; // agrego la lista de Items

  constructor() { 
    // inicializo los Items a visualizar
		this.items = [
      new Item('Comprar SSD - '),
      new Item('Comprar GPU - '),
      new Item('Alquilar Pelicula - ')
   ];

  }

  ngOnInit(): void {
  }

}
