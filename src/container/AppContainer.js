import { connect } from 'react-redux';
import App from '../App';
import todosAPI from '../api/TodoResourseAPI';
import { toggleTodo, showFilterList, add } from '../actions';
import Todo from '../model/Todo';
const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
    statusOfList: state.statusOfList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleTodo: viewId => {
      const todo = todosAPI.toggleActive(viewId);
      dispatch(toggleTodo(todo));
    },

    OnshowFilterList: statusOfList => {
      const todos = todosAPI.filerByStatus(statusOfList);
      dispatch(showFilterList(todos));
    },

    OnAdd: content => {
      const todo = new Todo(content);
      todosAPI.add(todo);
      dispatch(add(todo));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
