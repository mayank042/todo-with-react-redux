import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
var todoApp = combineReducers({
    visibilityFilter: visibilityFilter,
    todos: todos
});
export default todoApp;
//# sourceMappingURL=index.js.map