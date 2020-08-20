import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TodoItem} from '../../todo-item';
import {FormControl, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {addItem, removeItem, completeItem, reorderItems} from '../todo-actions';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-items-list-page',
  templateUrl: './items-list-page.component.html',
  styleUrls: ['./items-list-page.component.scss']
})
export class ItemsListPageComponent implements OnInit {
  public items$: Observable<TodoItem[]>;
  public items: TodoItem[] = [];
  public form = new FormGroup(
    {title: new FormControl(''),
      description: new FormControl(''),
      done: new FormControl(false)}
  );

  constructor(private store: Store<{items: TodoItem[]}>) {
    this.items$ = store.pipe(select('items'));
  }

  public addItem(){
    const id = uuid();
    const item = {...this.form.value, id};
    // this.items.push(item);
    // console.log(this.items);
    this.store.dispatch(addItem({item}));
    this.form.reset();
  }

  public removeItem(id){
    // console.log(this.items);
    // this.items.splice(id);
    this.store.dispatch(removeItem({id}));
  }

  public changeStatus(id){
    // this.items[id].done = !this.items[id].done;
    // console.log(this.items);
    this.store.dispatch(completeItem({id}));
  }

  public itemDropped(event){
    // console.log(event);
    const id1 = event.previousIndex;
    const id2 = event.currentIndex;
    // const item1 = this.items[id1];
    // this.items[id1] = {...this.items[id2], id: id1};
    // this.items[id2] = {...item1, id: id2};
    // console.log(this.items);
    this.store.dispatch(reorderItems({id1, id2}));
  }

  ngOnInit() {
    this.store.select((state: any) => state.items).subscribe(data => {
      this.items = data.items;
    });
  }
}
