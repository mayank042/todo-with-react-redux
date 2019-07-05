import React from 'react';
var Todo = function (_a) {
    var onClick = _a.onClick, completed = _a.completed, text = _a.text;
    return (<li onClick={onClick} style={{
        textDecoration: completed ? 'line-through' : 'none'
    }}>
    {text}
  </li>);
};
export default Todo;
//# sourceMappingURL=Todo.js.map