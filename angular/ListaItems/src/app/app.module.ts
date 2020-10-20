import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainlistComponent } from './mainlist/mainlist.component';
import { NewItemComponent } from './new-item/new-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlistComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
