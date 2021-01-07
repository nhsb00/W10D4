import { connect } from 'react-redux';
import TodoList from './todo_list';

import { receiveTodos, receiveTodo } from '../actions/todo_actions';

const mapStateToProps = (state) => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    receiveTodos: () => dispatch(receiveTodos()),
    receiveTodo: () => dispatch(receiveTodo())
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(TodoList);