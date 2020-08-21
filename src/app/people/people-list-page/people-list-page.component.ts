import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {v4 as uuid} from 'uuid';
import {Person} from '../../models/person';
import {addPerson, editPerson, removePerson} from '../people.actions';
import {ActivatedRoute} from '@angular/router';
import {selectAllPeople} from '../../app.state';

@Component({
  selector: 'app-people-list-page',
  templateUrl: './people-list-page.component.html',
  styleUrls: ['./people-list-page.component.scss']
})
export class PeopleListPageComponent implements OnInit {
  public people: Person[] = [];
  public addForm = new FormGroup(
    {name: new FormControl(''),
      surname: new FormControl('')}
  );
  public editForm = new FormGroup(
    {name: new FormControl(),
      surname: new FormControl()}
  );
  private personId;
  public isEditing = false;

  constructor(private store: Store,
              private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe(params => {
      if (params.get('id')){
        this.personId = params.get('id');
        this.isEditing = true;
      }
    });
  }

  public addPerson(){
    const id = uuid();
    const person = {...this.addForm.value, id};
    this.store.dispatch(addPerson({person}));
    this.addForm.reset();
  }

  public removePerson(id){
    this.store.dispatch(removePerson({id}));
  }

  public editPerson(id){
    this.store.dispatch(editPerson({id, changes: this.editForm.value}));
  }

  ngOnInit() {
    this.store.pipe(select(selectAllPeople)).subscribe(people => {
      this.people = people;
    });
  }

}
