import React from 'react';
import { TodoItem } from '../models';
import Todo from './todo';

interface TodoListProps {
  todos: TodoItem[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.SFC<TodoListProps> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
