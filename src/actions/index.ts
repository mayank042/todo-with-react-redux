import { Actions, TVisibilityFilters } from '../constants';
import { IAddToDoAction, IToggleTodo, ISetFilter } from '../types';

let nextTodoId = 0;

export function addTodo(text: string): IAddToDoAction {
  nextTodoId += 1;
  return {
    type: Actions.ADD_TODO,
    payload: {
      id: nextTodoId,
      text
    }
  }
}

export function setVisibilityFilter(filter: TVisibilityFilters): ISetFilter {
  return {
    type: Actions.SET_VISIBILITY_FILTER,
    payload: { filter }
  }
}

export function toggleTodo(id: number): IToggleTodo {
  return {
    type: Actions.TOGGLE_TODO,
    payload: { id }
  }
}