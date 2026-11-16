import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InicioComponent } from './inicio.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    InicioComponent,
    RouterModule.forChild([
      { path: '', component: InicioComponent }
    ])
  ]
})
export class InicioModule { }