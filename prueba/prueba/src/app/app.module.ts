import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebacentralComponent } from './pruebacentral/pruebacentral.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { FormsModule} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule} from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule }  from '@angular/material/checkbox';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatGridListModule }  from '@angular/material/grid-list';
import { MatIconModule }  from '@angular/material/icon';
import { MatInputModule }  from '@angular/material/input';
import { MatListModule }  from '@angular/material/list';
import { MatMenuModule }  from '@angular/material/menu';
import { MatSelectModule }  from '@angular/material/select';
import { MatTabsModule }  from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

// componentes de la app
import { TabMeetComponent } from './tabmeet/tabmeet.component';
//import { TabDaysComponent } from './tabdays/tabdays.component';
import { TabScheduleComponent } from './tab-schedule/tab-schedule.component';
//import { TabInvitationsComponent } from './tab-invitations/tab-invitations.component';
//import { TabAcceptancesComponent } from './tab-acceptances/tab-acceptances.component';


@NgModule({
  declarations: [
    AppComponent,
    PruebacentralComponent,
    TabMeetComponent,
    //TabDaysComponent,
    TabScheduleComponent,
    //TabInvitationsComponent,
    //TabAcceptancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
