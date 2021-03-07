import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})


export class ReunionComponent implements OnInit {
  
  private nombrereunion: string;
  constructor() {
    
   }

  ngOnInit(): void {
    this.nombrereunion = "reunones";
  }

}
