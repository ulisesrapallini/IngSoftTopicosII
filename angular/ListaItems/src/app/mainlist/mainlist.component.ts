import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mainlist',
  templateUrl: './mainlist.component.html',
  styleUrls: ['./mainlist.component.css']
})

export class MainlistComponent implements OnInit {

   //items : Item[]; // agrego la lista de Items

  constructor(private service:DataService) {
    
    // inicializo los Items a visualizar
		/*this.items = [
      new Item('Comprar SSD - '),
      new Item('Comprar GPU - '),
      new Item('Alquilar Pelicula - ')*/
    };
   
   items(){
     return this.service.getItemList();
   }

  
  ngOnInit(): void {
  }

  // remover el Item
  OnRemove(anItem):void {
    //this.items = this.items.filter(item => item !== anItem);
    this.service.delItem(anItem);
  }
  
  // edicion del Item
  OnEdit(){

  }
}
