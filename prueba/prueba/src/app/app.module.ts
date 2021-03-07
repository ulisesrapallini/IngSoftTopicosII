
import { AppComponent } from "./app.component";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTabsModule } from "@angular/material/tabs";
import { ReunionComponent } from './reunion/reunion.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatTabsModule,
    ReunionComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
