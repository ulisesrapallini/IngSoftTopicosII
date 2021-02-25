import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebacentralComponent } from './pruebacentral/pruebacentral.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// TABS de Material
import { MatTabsModule } from '@angular/material/tabs';
import { TabmeetComponent } from './tabmeet/tabmeet.component';

import {FormsModule} from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PruebacentralComponent,
    TabmeetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,   // esta es la referencia para usar los TABS
    MatInputModule,  // para el tab meet
    MatButtonModule, // para el tab meet
    FormsModule // para el tab meet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
