import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../../models/todo-item';
import {select, Store} from '@ngrx/store';
import {selectPerson} from '../../app.state';
import {Person} from '../../models/person';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() index: number;

  @Input() item: TodoItem;

  @Output() removeItem = new EventEmitter();

  @Output() changeStatus = new EventEmitter();

  public assignee: Person;

  constructor(private store: Store) { }

  onremoveItem(){
    this.removeItem.emit(this.item.id);
  }

  onchangeStatus(){
    this.changeStatus.emit(this.item.id);
  }

  ngOnInit(): void {
    this.store.pipe(select(selectPerson, {id: this.item.assignee})).subscribe(person => {
      this.assignee = person;
    });
  }

}
