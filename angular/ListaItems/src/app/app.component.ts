import { Component } from '@angular/core';
// importamos la clase Item
import { Item } from './model/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaItems';
}
