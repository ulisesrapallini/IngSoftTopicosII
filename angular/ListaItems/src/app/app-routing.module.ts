import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainlistComponent } from './mainlist/mainlist.component';
import { NewItemComponent } from './new-item/new-item.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: MainlistComponent },
    { path: 'new-item', component: NewItemComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
  /*
    imports: [ CommonModule, RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
   */
})
export class AppRoutingModule { }
