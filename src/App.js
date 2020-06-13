import React, {Component} from 'react';
import Header from './components/Layout'
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'todo 1',
        completed: false
      },
      {
        id: 2,
        title: 'todo 2',
        completed: false
      },
      {
        id: 3,
        title: 'todo 3',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })

    });

  }

  deleteTodo = (id) => {
    const todosArray = this.state.todos.filter(item => item.id !== id);
    this.setState({ todos: todosArray});
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}></Todos>
      </div>
    );
  }
}

export default App;
