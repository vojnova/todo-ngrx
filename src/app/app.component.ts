import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-ngrx';
  public items = [];
  public form = new FormGroup(
    {title: new FormControl(''),
    description: new FormControl(''),
    done: new FormControl(false)}
  );

  public removeItem(id){
    console.log(this.items);
    this.items.splice(id);
  }

  public addItem(){
    const id = this.items.length;
    const item = {...this.form.value, id};
    this.items.push(item);
    console.log(this.items);
  }

  public changeStatus(id){
    this.items[id].done = !this.items[id].done;
    console.log(this.items);
  }

  public itemDropped(event){
    console.log(event);
    const id1 = event.previousIndex;
    const id2 = event.currentIndex;
    const item1 = this.items[id1];
    this.items[id1] = {...this.items[id2], id: id1};
    this.items[id2] = {...item1, id: id2};
    console.log(this.items);
  }
}
