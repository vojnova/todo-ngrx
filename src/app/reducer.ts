import {TodoItem} from './todo-item';
import {createReducer, on} from '@ngrx/store';
import {addItem, completeItem, removeItem, reorderItems} from './actions';

export interface ItemsState {
  items: TodoItem[];
}

export const initialState: ItemsState = {
  items: []
};

const todoReducerConst = createReducer(initialState,
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
    console.log('in complete item');
    const newItems = state.items.map(item => {
      if (item.id === id){
        return {...item, done: !item.done};
      }
      return item;
    });
    console.log(newItems);
    return {
      ...state,
      items: newItems
    };
  }),
  on(reorderItems, (state, {id1, id2}) => {
    const item1 = state.items.find(item => item.id === id1);
    const item2 = state.items.find(item => item.id === id2);
    const newItems = state.items.map(item => {
      if (item.id === id1){
        return {...item2, id: id1};
      }
      else if (item.id === id2){
        return {...item1, id: id2};
      }
      return item;
    });
    return {
      ...state,
      items: newItems
    };
  })
);

export function todoReducer(state, action){
  return todoReducerConst(state, action);
}
