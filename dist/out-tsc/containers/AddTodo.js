import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
function AddTodo(_a) {
    var dispatch = _a.dispatch;
    var input;
    return (<div>
      <form onSubmit={function (e) {
        e.preventDefault();
        if (!input.value.trim()) {
            return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
    }}>
        <input ref={function (node) { return (input = node); }}/>
        <button type="submit">Add Todo</button>
      </form>
    </div>);
}
export default connect()(AddTodo);
//# sourceMappingURL=AddTodo.js.map