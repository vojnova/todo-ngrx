import {createAction, props} from '@ngrx/store';
import {TodoItem} from './todo-item';

export const addItem = createAction('[Todo item] Add',
  props<{item: TodoItem}>());

export const removeItem = createAction('[Todo item] Remove',
  props<{id: number}>());

export const completeItem = createAction('[Todo item] Complete',
  props<{id: number}>());

export const reorderItems = createAction('[Todo item] Reorder',
  props<{id1: number, id2: number}>());
