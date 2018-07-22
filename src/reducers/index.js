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
      newState.todos = action.todo;
      return newState;
      // return {
      //   ...state,
      //   todos: state.todos
      //     .map(
      //       todo =>
      //         todo.viewId === action.todo.viewId
      //           ? { ...todo, status: action.todo.status }
      //           : todo
      //     )
      //     .filter(statusFilter)
      // };
    }
    case 'SHOW_FILTER_LIST': {
      // return {
      //   todos: [...action.todos],
      //   statusFilter: [...action.statusOfList]
      // };
      newState.todos = action.todos;
      return newState;
    }

    case 'ADD_ITEM': {
      return {
        ...state,
        todos: [...state.todos, action.todo].filter(statusFilter)
      };
      // newState.todos=action.todo
      // return newState;
    }
    case 'UPDAtE_ITEM': {
      console.log(state.todos);
      newState.todos = action.todo;
      // return {
      //   ...state,
      //   todos: state.todos.map(
      //       todo =>
      //         todo.viewId === action.todo.viewId
      //           ? { ...todo, content: action.todo.content }
      //           : todo
      //     )
      // };
      return newState;
    }
    default:
      return state;
  }
};
