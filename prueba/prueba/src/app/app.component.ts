import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { NavigationExtras } from '@angular/router';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  
  

  constructor(private route: ActivatedRoute, private router: Router){}
  
  public nuevaReunion(){
    this.router.navigate(['reunion'], { relativeTo: this.route });
  }

  public seleccionOpciones(){
    alert("seleccion Opciones");
  }

  public administrar(){
    alert("administrar");
  }

  public loginUser(){
    alert("login user");
  }

  public compartir(){
    this.router.navigate(['compartir'], { relativeTo: this.route });
  }

}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */