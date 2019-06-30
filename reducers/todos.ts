
import { IAddToDoAction, IAction } from '../types';
import { ToDo } from '../models';

function todos(state: ToDo[] = [], action: IAction): ToDo[] {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: action.id, text: action.text, completed: false }
      ]
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state;
  }
}

export default todos;