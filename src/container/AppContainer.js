import { connect } from 'react-redux';
import App from '../App';
import todosAPI from '../api/TodoResourseAPI';
import { toggleTodo, showFilterList } from '../actions';
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
