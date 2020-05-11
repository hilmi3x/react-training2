import React from 'react';

export default props => (
    <div 
        className="Todoitems"
        style={{textDecoration: props.todo.complete ? "line-through" : ""}}
        onClick={props.toggleComplete}
        onDoubleClick={props.deleteTodo}
    >
        {props.todo.text}
    </div>
);
