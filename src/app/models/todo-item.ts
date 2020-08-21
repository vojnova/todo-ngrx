import {Person} from './person';

export interface TodoItem {
  id?: number;
  title?: string;
  description?: string;
  done?: boolean;
  person?: Person;
}
