import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Person} from '../../models/person';
import {ActivatedRoute, Router} from '@angular/router';
import {selectItemsByPerson, selectPerson} from '../../app.state';
import {TodoItem} from '../../models/todo-item';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent implements OnInit {
  private personId;
  public person: Person;
  public items: TodoItem[];

  constructor(private activatedRoute: ActivatedRoute, private store: Store, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('id')){
        this.personId = params.get('id');
      }
    });
  }

  ngOnInit(): void {
    this.store.pipe(select(selectPerson, {id: this.personId})).subscribe(person => {
      this.person = person;
      if (!this.person){
        this.router.navigateByUrl('/people');
      }
      console.log(this.person);
    });

    this.store.pipe(select(selectItemsByPerson, {id: this.personId})).subscribe(items => {
      this.items = items;
      console.log(this.items);
    });
  }

}
