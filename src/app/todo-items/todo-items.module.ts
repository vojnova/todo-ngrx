import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListPageComponent } from './items-list-page/items-list-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {todoReducer} from './todo-reducer';
import {MaterialModule} from '../material/material.module';



@NgModule({
  declarations: [ItemsListPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('items', todoReducer)
  ]
})
export class TodoItemsModule { }
