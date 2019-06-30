
import { TVisibilityFilters } from '../actions';
import { IAction, ISetFilter } from '../types';

function visibilityFilter(state: TVisibilityFilters = 'SHOW_ALL', action: IAction) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return (action as ISetFilter).filter
    default:
      return state
  }
}

export default visibilityFilter;