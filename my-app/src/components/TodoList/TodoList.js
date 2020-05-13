import React from 'react';
import './TodoList.css';
import TodoForm from './TodoForm/TodoForm';
import Todo from './Todo';
import Immutable from 'immutable';

export default class TodoList extends React.Component{
    state = {
        todos: Immutable.List()
    };

    addTodo = todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    };

    toggleComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                        return {
                            ...todo,
                            complete: !todo.complete
                        };    
                }else{
                    return todo;
                };
            })
        })
    };

    deleteTodo(id){
        const todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({
            todos: todos
        })
    };

    render(){
        return(
            <div className="todoPage">
                <div>
                    <TodoForm onSubmit={this.addTodo}/>
                </div>
                <div>
                    {this.state.todos.map(todo => (
                        <Todo key={todo.id} id={todo.id} toggleComplete={()=> this.toggleComplete(todo.id)} todo={todo} deleteTodo={() => this.deleteTodo(todo.id)}/>
                    ))}
                </div>
            </div>
        )
    }
}