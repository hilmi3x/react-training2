import React from 'react';
import './TodoForm.css';

export default class TodoForm extends React.Component{
    state = {
        text: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            id: this.state.text,
            text: this.state.text,
            complete: false
        })
        this.setState({
            text: ""
        })
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                placeholder="Add item to your todo list"
                />
                <button className="AddButton" onClick={this.handleSubmit}>Add Todo</button>
            </form>
        )
    }
}