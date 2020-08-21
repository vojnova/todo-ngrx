import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TodoItem} from '../../models/todo-item';
import {FormControl, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {addItem, removeItem, completeItem, reorderItems} from '../items.actions';
import {v4 as uuid} from 'uuid';
import {Person} from '../../models/person';
import {selectAllItems, selectAllPeople} from '../../app.state';

@Component({
  selector: 'app-items-list-page',
  templateUrl: './items-list-page.component.html',
  styleUrls: ['./items-list-page.component.scss']
})
export class ItemsListPageComponent implements OnInit {
  public items: TodoItem[] = [];
  public people: Person[];
  public form = new FormGroup(
    {title: new FormControl(''),
      description: new FormControl(''),
      done: new FormControl(false),
      assignee: new FormControl('')}
  );

  constructor(private store: Store) { }

  public setAsignee(asigneeId){
    this.form.get('assignee').setValue(asigneeId);
  }

  public addItem(){
    const id = uuid();
    const item = {...this.form.value, id};
    this.store.dispatch(addItem({item}));
    this.form.reset();
  }

  public removeItem(id){
    this.store.dispatch(removeItem({id}));
  }

  public changeStatus(id){
    this.store.dispatch(completeItem({id}));
  }

  public itemDropped(event){
    const id1 = event.previousIndex;
    const id2 = event.currentIndex;
    this.store.dispatch(reorderItems({id1, id2}));
  }

  ngOnInit() {
    // this.store.select((state: any) => state).subscribe(data => {
    //   this.items = data.items.items;
    //   this.people = data.people.people;
    //   console.log(this.items);
    //   console.log(this.people);
    // });

    this.store.pipe(select(selectAllItems)).subscribe(items => {
      this.items = items;
    });

    this.store.pipe(select(selectAllPeople)).subscribe(people => {
      this.people = people;
    });
  }
}
