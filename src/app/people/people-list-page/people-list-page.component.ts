import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {v4 as uuid} from 'uuid';
import {Person} from '../../models/person';
import {addPerson, removePerson} from '../people.actions';

@Component({
  selector: 'app-people-list-page',
  templateUrl: './people-list-page.component.html',
  styleUrls: ['./people-list-page.component.scss']
})
export class PeopleListPageComponent implements OnInit {
  public people$: Observable<Person[]>;
  public people: Person[] = [];
  public form = new FormGroup(
    {name: new FormControl(''),
      surname: new FormControl('')}
  );

  constructor(private store: Store<{people: Person[]}>) {
    this.people$ = store.pipe(select('people'));
  }

  public addPerson(){
    const id = uuid();
    const person = {...this.form.value, id};
    // this.items.push(item);
    // console.log(this.items);
    this.store.dispatch(addPerson({person}));
    this.form.reset();
  }

  public removePerson(id){
    // console.log(this.items);
    // this.items.splice(id);
    this.store.dispatch(removePerson({id}));
  }

  ngOnInit() {
    this.store.select((state: any) => state.people).subscribe(data => {
      this.people = data.people;
    });
  }

}
