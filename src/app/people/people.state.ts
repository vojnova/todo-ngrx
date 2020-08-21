import {Person} from '../models/person';
import {createSelector} from '@ngrx/store';
import {TodoItem} from '../models/todo-item';

export interface AppState {
  items: TodoItem[];
  people: {
    people: Person[];
  };
}


export const allPeople = (state: AppState) => state.people.people;

export const selectPerson = createSelector(
  allPeople,
  (people, props) => {
    console.log('in state');
    console.log(people);
    console.log(props);
    return people.find((person) => person.id === props.id);
  });
