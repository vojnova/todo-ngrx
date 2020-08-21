import {createAction, props} from '@ngrx/store';
import {Person} from '../models/person';

export const addPerson = createAction('[Person] Add',
  props<{person: Person}>());

export const removePerson = createAction('[Person] Remove',
  props<{id: string}>());

export const editPerson = createAction('[Person] Add',
  props<{id: string, changes: Person}>());
