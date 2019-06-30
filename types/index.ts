import { TVisibilityFilters, TAction } from '../actions';

export interface IAction {
  type: TAction;
}

export interface IAddToDoAction extends IAction {
  id: number;
  text: string;
}

export interface ISetFilter extends IAction {
  filter: TVisibilityFilters
}

export interface IToggleTodo extends IAction {
  id: number
}