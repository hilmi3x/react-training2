import React from 'react';

export default props => (
    <div 
    style={{textDecoration: props.todo.complete ? "line-through" : ""}}
    onClick={props.toggleComplete}
    onDoubleClick={props.deleteTodo}
    >
        {props.todo.text}
    </div>
);
