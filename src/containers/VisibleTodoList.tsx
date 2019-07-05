import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { State } from '../reducers';
import { Dispatch } from '../types';
import { TodoItem } from '../models';
import { TVisibilityFilters, VisibilityFilters, toggleTodo } from '../actions';

interface StateFromProps {
  todos: TodoItem[];
}

interface DispatchFromProps {
  onTodoClick: (id: number) => void;
}

function getVisibleTodos(todos: TodoItem[], filter: TVisibilityFilters) {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case VisibilityFilters.SHOW_ALL:
    default:
      return todos;
  }
}

function mapStateToProps(state: State): StateFromProps {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
}

function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
