import {TodoItem} from './todo-item';

export interface Person {
  id?: string;
  name?: string;
  surname?: string;
  items?: TodoItem[];
}
