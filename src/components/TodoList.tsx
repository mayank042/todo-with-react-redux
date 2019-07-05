import React from 'react';
import { TodoItem } from '../models';
import Todo from './Todo';

interface TodoListProps {
  todos: TodoItem[];
  onTodoClick: (id: number) => void;
}

const TodoList: React.SFC<TodoListProps> = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
