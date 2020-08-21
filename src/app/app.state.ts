import {Person} from './models/person';
import {createSelector, props} from '@ngrx/store';
import {TodoItem} from './models/todo-item';

export interface AppState {
  items: {
    items: TodoItem[];
  };
  people: {
    people: Person[];
  };
}


export const allPeople = (state: AppState) => state.people.people;
export const allItems = (state: AppState) => state.items.items;

export const selectAllPeople = createSelector(
  allPeople,
  (people) => {
    return people;
  }
);

export const selectAllItems = createSelector(
  allItems,
  (items) => {
    return items;
  }
);

export const selectPerson = createSelector(
  allPeople,
  (people, props) => {
    console.log('in state');
    console.log(people);
    console.log(props);
    return people.find((person) => person.id === props.id);
  });

export const selectItemsByPerson = createSelector(
  allItems,
  (items, props) => {
    return items.filter((item) => item.assignee === props.id);
  }
)
