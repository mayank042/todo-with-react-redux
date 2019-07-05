import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { TVisibilityFilters } from '../actions';
import { TodoItem } from '../models';

export interface State {
  visibilityFilter: TVisibilityFilters,
  todos: TodoItem[]
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
