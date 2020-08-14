import {TodoItem} from './todo-item';
import {createReducer, on} from '@ngrx/store';
import {addItem, completeItem, removeItem, reorderItems} from './actions';

export interface ItemsState {
  items: TodoItem[];
}

export const initialState = {
  items: []
};

const todoReducerConst = createReducer(initialState,
  on(addItem),
  on(removeItem),
  on(completeItem),
  on(reorderItems)
);

export function todoReducer(state, action){
  return todoReducerConst(state, action);
}
