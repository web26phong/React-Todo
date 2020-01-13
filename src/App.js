import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: []
    }
  }

  toggleTodo = id => {
    const newTodoList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  addTodo = todo => {
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  removeTodo = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => item.completed === false)
    })
  }

  render() {
    return (
      <div className="main">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} removeTodo={this.removeTodo} />
        <TodoList todos={this.state.todoList} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}

export default App;
