
import { IToggleTodo, IAddToDoAction, ISetFilter } from '../types';

let nextTodoId = 0;

export type TVisibilityFilters = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';
export type TAction = 'ADD_TODO' | 'SET_VISIBILITY_FILTER' | 'TOGGLE_TODO';

export const Actions = {
  ADD_TODO: 'ADD_TODO' as TAction,
  TOGGLE_TODO: 'TOGGLE_TODO' as TAction,
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER' as TAction
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL' as TVisibilityFilters,
  SHOW_COMPLETED: 'SHOW_COMPLETED' as TVisibilityFilters,
  SHOW_ACTIVE: 'SHOW_ACTIVE' as TVisibilityFilters
}

export function addTodo(text: string): IAddToDoAction {
  return {
    type: Actions.ADD_TODO,
    id: nextTodoId + 1,
    text
  }
}

export function setVisibilityFilter(filter: TVisibilityFilters): ISetFilter {
  return {
    type: Actions.SET_VISIBILITY_FILTER,
    filter
  }
}

export function toggleTodo(id: number): IToggleTodo {
  return {
    type: Actions.TOGGLE_TODO,
    id
  }
}