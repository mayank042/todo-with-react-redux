import { TAction, TVisibilityFilters } from '../constants';

export interface IAction {
  type: TAction;
  payload: object;
}

export interface IAddToDoAction extends IAction {
  payload: {
    id: number;
    text: string;
  }
}

export interface ISetFilter extends IAction {
  payload: {
    filter: TVisibilityFilters
  }
}

export interface IToggleTodo extends IAction {
  payload: {
    id: number
  }
}


export type Dispatch = (action: IAction) => void;