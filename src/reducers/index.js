import Todo from '../model/Todo';

export default (state = { todos: [], statusOfList: Todo.ALL }, action) => {
  const statusFilter =
    state.statusOfList === Todo.ALL
      ? () => true
      : todo => {
          return todo.status === state.statusOfList;
        };
  const newState = state;

  switch (action.type) {
    case 'TOGGLE_ACTIVE': {
      return {
        ...state,
        todos: state.todos
          .map(
            todo =>
              todo.viewId === action.todo.viewId
                ? { ...todo, status: action.todo.status }
                : todo
          )
          .filter(statusFilter)
      };
    }
    case 'SHOW_FILTER_LIST': {
      return {
        todos: [...action.todos],
        statusFilter: [...action.statusOfList]
      };
    }

    case 'ADD_ITEM': {
      return {
        ...state,
        todos: [...state.todos, action.todo].filter(statusFilter)
      };
    }
    default:
      return state;
  }
};
