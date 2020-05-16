import React from 'react';
import {Link} from 'react-router-dom';

export default props => (
    <Link to={`/routePage/${props.id}`}
        className="todoItems"
        style={{textDecoration: props.todo.complete ? "line-through" : ""}}
        onClick={props.toggleComplete}
        onDoubleClick={props.deleteTodo}
    >
        <span>{props.todo.text}</span>
    </Link>
);
