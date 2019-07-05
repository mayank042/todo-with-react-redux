import React from 'react';
import Todo from './todo';
var TodoList = function (_a) {
    var todos = _a.todos, onTodoClick = _a.onTodoClick;
    return (<ul>
    {todos.map(function (todo) { return (<Todo key={todo.id} {...todo} onClick={function () { return onTodoClick(todo.id); }}/>); })}
  </ul>);
};
export default TodoList;
//# sourceMappingURL=TodoList.js.map