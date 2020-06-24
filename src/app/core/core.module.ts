import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { userReducer } from '../reducers/user.reducer';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [],
  imports: [
    NgbModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService),
    StoreModule.forRoot({ users: userReducer }),
    CommonModule
  ]
})
export class CoreModule { }
