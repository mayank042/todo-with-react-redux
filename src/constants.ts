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