import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { TodoItem } from '../models';
import { TVisibilityFilters } from '../constants';

export interface State {
  visibilityFilter: TVisibilityFilters,
  todos: TodoItem[]
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
