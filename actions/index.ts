
import { IToggleTodo, IAddToDoAction, ISetFilter } from '../types';

let nextTodoId = 0;

export type TVisibilityFilters = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';
export type TAction = 'ADD_TODO' | 'SET_VISIBILITY_FILTER' | 'TOGGLE_TODO';

export function addTodo(text): IAddToDoAction {
  return {
    type: 'ADD_TODO',
    id: nextTodoId + 1,
    text
  }
}

export function setVisibilityFilter(filter: TVisibilityFilters): ISetFilter {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export function toggleTodo(id): IToggleTodo {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const VisibilityFilters: { [key: string]: TVisibilityFilters } = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}