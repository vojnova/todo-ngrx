import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../../models/todo-item';

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

  constructor() { }

  onremoveItem(){
    this.removeItem.emit(this.item.id);
  }

  onchangeStatus(){
    this.changeStatus.emit(this.item.id);
  }

  ngOnInit(): void {
  }

}
