import {TodoItem} from '../models/todo-item';
import {createReducer, on} from '@ngrx/store';
import {addItem, completeItem, removeItem, reorderItems} from './items.actions';

export interface ItemsState {
  items: TodoItem[];
}

export const initialState: ItemsState = {
  items: []
};

const itemsReducerConst = createReducer(initialState,
  on(addItem, (state, {item}) => {
    const newItems = Object.assign([], state.items);
    newItems.push(item);
    return {
      ...state,
      items: newItems
    };
  }),
  on(removeItem, (state, {id}) => {
    return {
      ...state,
      items: state.items.filter(item => item.id !== id)
    };
  } ),
  on(completeItem, (state, {id}) => {
    const newItems = state.items.map(item => {
      if (item.id === id){
        return {...item, done: !item.done};
      }
      return item;
    });
    return {
      ...state,
      items: newItems
    };
  }),
  on(reorderItems, (state, {id1, id2}) => {
    const item1 = state.items[id1];
    const item2 = state.items[id2];
    const newItems = Object.assign([], state.items);
    newItems[id1] = item2;
    newItems[id2] = item1;
    return {
      ...state,
      items: newItems
    };
  })
);

export function itemsReducer(state, action){
  return itemsReducerConst(state, action);
}
