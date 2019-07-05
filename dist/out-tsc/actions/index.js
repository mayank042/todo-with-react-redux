var nextTodoId = 0;
export var Actions = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER'
};
export var VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
export function addTodo(text) {
    return {
        type: Actions.ADD_TODO,
        id: nextTodoId + 1,
        text: text
    };
}
export function setVisibilityFilter(filter) {
    return {
        type: Actions.SET_VISIBILITY_FILTER,
        filter: filter
    };
}
export function toggleTodo(id) {
    return {
        type: Actions.TOGGLE_TODO,
        id: id
    };
}
//# sourceMappingURL=index.js.map