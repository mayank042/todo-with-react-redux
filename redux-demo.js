const state = {
  todos: [
    { id: 1, text: 'todo one', completed: false },
    { id: 2, text: 'todo two', completed: false },
    { id: 3, text: 'todo three', completed: false }
  ]
}

function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

function todoApp(state, action) {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo
        })
      })
    default:
      return state;
  }
}

const newState = todoApp(state, toggleTodo(2))
console.log(newState);