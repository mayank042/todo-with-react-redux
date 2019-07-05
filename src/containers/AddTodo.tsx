import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Dispatch } from '../types';

function AddTodo({ dispatch }: { dispatch: Dispatch }) {
  let input: HTMLInputElement;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);
