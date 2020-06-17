import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserEffects } from 'src/app/effects/user.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    EffectsModule.forRoot([UserEffects]),
    ReactiveFormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
