import React from 'react';

const TodoList = ({todos, receiveTodos, receiveTodo}) => {
    return(
        <div> 
            <ul>
                { todos.map((todo, i) => <li key = {i}> { todo } </li>) }
            </ul>
        </div>
    )
};

export default TodoList;