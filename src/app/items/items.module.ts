import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListPageComponent } from './items-list-page/items-list-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {itemsReducer} from './items.reducer';
import {MaterialModule} from '../material/material.module';
import { ItemComponent } from './item/item.component';



@NgModule({
    declarations: [ItemsListPageComponent, ItemComponent],
    exports: [
        ItemComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        StoreModule.forFeature('items', itemsReducer)
    ]
})
export class ItemsModule { }
