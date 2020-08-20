import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsListPageComponent} from './items/items-list-page/items-list-page.component';
import {PeopleListPageComponent} from './people/people-list-page/people-list-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/items', pathMatch: 'full'},
  {path: 'items', component: ItemsListPageComponent},
  {path: 'people', component: PeopleListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
