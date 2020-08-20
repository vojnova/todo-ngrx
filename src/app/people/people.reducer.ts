import {createReducer, on} from '@ngrx/store';
import {Person} from '../models/person';
import {addPerson, removePerson} from './people.actions';

export interface PeopleState {
  people: Person[];
}

export const initialState: PeopleState = {
  people: []
};

const peopleReducerConst = createReducer(initialState,
  on(addPerson, (state, {person}) => {
    const newPeople = Object.assign([], state.people);
    newPeople.push(person);
    return {
      ...state,
      people: newPeople
    };
  }),
  on(removePerson, (state, {id}) => {
    return {
      ...state,
      people: state.people.filter(person => person.id !== id)
    };
  }));

export function peopleReducer(state, action){
  return peopleReducerConst(state, action);
}
