import { Injectable } from '@angular/core';
import { Item } from './model/Item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items :Item[];

  constructor() { 
    this.items = [
      new Item('Comprar SSD - '),
      new Item('Comprar GPU - '),
      new Item('Alquilar Pelicula - ')];
  }

  addItem(item:Item){
    this.items.push(item);
  }

  delItem(item:Item){
    this.items = this.items.filter(i=>item!==i);
  }

  getItemList(){
    return this.items;
  }
}
