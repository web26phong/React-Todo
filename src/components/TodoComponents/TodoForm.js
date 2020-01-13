import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            formText: ""
        }
    }

    handleChanges = e => {
        this.setState({
            formText: e.target.value
        })
    }

    addButton = e => {
        e.preventDefault();
        this.props.addTodo(this.state.formText);
        this.setState({
            formText: ""
        })
    }

    clearButton = e => {
        e.preventDefault();
        this.props.removeTodo();
    }

    render(){
        return (
            <form className="form">
                <input title="enter a todo here" type="text" name="todo" value={this.state.formText} onChange={this.handleChanges} />
                <button title="click to to add a Todo" onClick={this.addButton}>Add Todo</button>
                <button title="Click on a Todo to mark as completed" onClick={this.clearButton}>Clear Completed Todos</button>
            </form>
        )
    }
}

export default TodoForm;