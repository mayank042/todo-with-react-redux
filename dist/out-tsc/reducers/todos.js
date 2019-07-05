import { Actions } from '../actions';
function todos(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case Actions.ADD_TODO:
            return state.concat([
                {
                    id: 1,
                    text: action.text,
                    completed: false
                }
            ]);
        case Actions.TOGGLE_TODO:
            return state.map(function (todo) {
                if (todo.id === action.id) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    });
                }
                return todo;
            });
        default:
            return state;
    }
}
export default todos;
//# sourceMappingURL=todos.js.map