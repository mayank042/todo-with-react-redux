import { Actions } from '../actions';
function visibilityFilter(state, action) {
    if (state === void 0) { state = 'SHOW_ALL'; }
    switch (action.type) {
        case Actions.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
export default visibilityFilter;
//# sourceMappingURL=visibilityFilter.js.map