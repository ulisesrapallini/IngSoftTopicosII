import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Item } from '../model/Item'
import { FormGroup, FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})

export class NewItemComponent implements OnInit {
  item:Item;
  idx: string;
  newItemForm: FormGroup;
  constructor(private router:Router, private route:ActivatedRoute, private service:DataService) {
    this.idx = this.route.snapshot.paramMap.get('idx');
    this.newItemForm = new FormGroup({
      itemName: new FormControl()
    });
    
  }

  ngOnInit(): void {
    //this.addItem(new Item(this.newItemForm.get('itemName').value));
    this.idx= this.route.snapshot.paramMap.get('idx');
    if(this.idx==null){ 
      this.item = new Item("");
    }
    else{ 
      this.item = this.service.getItemList()[this.idx]      
    }
    
    this.newItemForm = new FormGroup({ itemName: new FormControl(this.item.name)    }); 

  }

  onSubmit(): void {
    //this.addItem(new Item(this.newItemForm.get('itemName').value));
    this.item.name=this.newItemForm.get('itemName').value;

    if(this.idx==null){
      this.addItem(this.item);
    }
    this.router.navigateByUrl('/home') 

  } 	
  

  addItem(item: Item) {
    this.service.addItem(item);
    this.router.navigateByUrl('/home');
  }
  

}
