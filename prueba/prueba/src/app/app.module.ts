import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebacentralComponent } from './pruebacentral/pruebacentral.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// TABS de Material
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    PruebacentralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule   // esta es la referencia para usar los TABS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
