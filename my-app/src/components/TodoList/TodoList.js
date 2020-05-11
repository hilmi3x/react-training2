import React from 'react';
import './TodoList.css';
import TodoForm from '../TodoForm/TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component{
    state = {
        todos: []
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
        console.log(111,id);
        const todos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({
            todos: todos})
    };

    render(){
        return(
            <div className="TodoPage">
                <div>
                    <TodoForm onSubmit={this.addTodo}/>
                </div>
                <div>
                    {this.state.todos.map(todo => (
                        <Todo key={todo.id} toggleComplete={()=> this.toggleComplete(todo.id)} todo={todo} deleteTodo={() => this.deleteTodo(todo.id)}/>
                    ))}
                </div>
            </div>
        )
    }
}