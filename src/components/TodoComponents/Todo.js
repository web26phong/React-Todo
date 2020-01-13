import React from "react";

const Todo = props => {
    return (
        <div className={`todo${props.todo.completed ? " completed" : ""}`} onClick={()=> props.toggleTodo(props.todo.id)}>
            <p title="Click on this Todo to mark as completed">{props.todo.name}</p>
        </div>
    )
}

export default Todo;