import { connect } from 'react-redux';
import App from '../App';
import todosAPI from '../api/TodoResourseAPI';
import { toggleTodo } from '../actions';
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
