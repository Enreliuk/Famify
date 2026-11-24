import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CadastrarFamiliaComponent } from './cadastrar-familia.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CadastrarFamiliaComponent,
    RouterModule.forChild([
      { path: '', component: CadastrarFamiliaComponent }
    ])
  ]
})
export class CadastrarFamiliaModule { }
