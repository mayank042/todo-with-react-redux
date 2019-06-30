
import { TVisibilityFilters } from '../actions';
import { IAddToDoAction, IAction } from '../types';

function visibilityFilter(state: TVisibilityFilters = 'SHOW_ALL', action: IAction) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter;