import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const todosReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_TODOS:
            // what is elements are contained in the action?
            const todos = { [action.todos.id]: { todos: action.todos } }
            const newState = Object.assign({}, oldState, todos);
            return newState;
        case RECEIVE_TODO:
            const todo = { 
                [action.todo.id]: { todo: action.todo }
            }
            const newState = Object.assign({}, oldState, todo);
            return newState;
        default:
            return oldState;
    }
}

export default todosReducer;