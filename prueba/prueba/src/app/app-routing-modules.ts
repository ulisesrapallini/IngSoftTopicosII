import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalComponent } from "./principal/principal.component";
import { ReunionComponent } from "./reunion/reunion.component";
import { CompartirComponent } from "./compartir/compartir.component";

const routes: Routes = [ 
  { path: '', component: PrincipalComponent },
  { path: 'reunion', component : ReunionComponent },
  { path: 'compartir', component : CompartirComponent },
  //{ path: '**', component: PaginaInexistenteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }