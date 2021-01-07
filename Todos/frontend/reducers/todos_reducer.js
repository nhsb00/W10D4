import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

const todosReducer = (oldState = initialState, action) => {
    Object.freeze(oldState)
    let nextState = {};

    switch(action.type) {
        case RECEIVE_TODOS:
            // what is elements are contained in the action?
            action.todos.forEach(todo => {
                let somethingTodo = { [action.todo.id]: { todo: action.todo } };
                nextState[action.todo.id] = somethingTodo;
            })
            return nextState;
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

