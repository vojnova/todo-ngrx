import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListPageComponent } from './people-list-page/people-list-page.component';
import {MaterialModule} from '../material/material.module';
import {StoreModule} from '@ngrx/store';
import {peopleReducer} from './people.reducer';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { PersonPageComponent } from './person-page/person-page.component';
import {ItemsModule} from '../items/items.module';



@NgModule({
  declarations: [PeopleListPageComponent, PersonPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('people', peopleReducer),
    RouterModule,
    ItemsModule
  ]
})
export class PeopleModule { }
