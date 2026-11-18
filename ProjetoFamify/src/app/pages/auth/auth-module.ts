import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing-module';
import { AuthComponent } from './auth';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    AuthComponent
  ]
})
export class AuthModule { }