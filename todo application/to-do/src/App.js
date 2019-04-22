import React, { Component } from 'react';
import Todos from './component/Todos';
import './App.css';

class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Application Complete',
                completed: false
            },
            {
                id: 2,
                title: 'Lit code ',
                completed: false
            },
            {
                id: 3,
                title: 'Web Dev course',
                completed: false
            }
            
        ]
    }
    
    // toggle 
    markComplete =( id ) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed =!todo.completed
            }
            return todo;
        })});
    }

// Delete ToDO 
    delTodo = (id) => {
        console.log(id)
    }
    
  render() {  
    return (
      <div className="App">  
           <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
