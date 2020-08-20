import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListPageComponent } from './people-list-page/people-list-page.component';
import {MaterialModule} from '../material/material.module';
import {StoreModule} from '@ngrx/store';
import {peopleReducer} from './people.reducer';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [PeopleListPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('people', peopleReducer)
  ]
})
export class PeopleModule { }
