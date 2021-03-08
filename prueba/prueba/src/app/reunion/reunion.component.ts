import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css'],
})

export class ReunionComponent implements OnInit {
  private nombre : string;
  private descripcion : string;
  constructor() { }

  ngOnInit(): void {
       this.nombre = "";
       this.descripcion = "";
  }

}
