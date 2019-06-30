
import { IAction, IAddToDoAction, IToggleTodo } from '../types';
import { ToDo } from '../models';

function todos(state: ToDo[] = [], action: IAction): ToDo[] {
  switch (action.type) {
    case 'ADD_TODO':
      const { id, text } = action as IAddToDoAction;
      return [
        ...state,
        { id, text, completed: false }
      ]
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === (action as IToggleTodo).id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state;
  }
}

export default todos;