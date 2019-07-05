import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { VisibilityFilters, toggleTodo } from '../actions';
function getVisibleTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(function (t) { return t.completed; });
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(function (t) { return !t.completed; });
        case VisibilityFilters.SHOW_ALL:
        default:
            return todos;
    }
}
function mapStateToProps(state) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onTodoClick: function (id) {
            dispatch(toggleTodo(id));
        }
    };
}
var VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default VisibleTodoList;
//# sourceMappingURL=VisibleTodoList.js.map