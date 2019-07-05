
import { IAction, IAddToDoAction, IToggleTodo } from '../types';
import { TodoItem } from '../models';
import { Actions } from '../actions';

function todos(state: TodoItem[] = [], action: IAction): TodoItem[] {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [
        ...state, {
          id: 1,
          text: (action as IAddToDoAction).text,
          completed: false
        }
      ]
    case Actions.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === (action as IToggleTodo).id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state;
  }
}

export default todos;