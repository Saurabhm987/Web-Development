import React, { Component } from 'react';
import Todositem from './Todositem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {  
    return this.props.todos.map((todo) => (
    <Todositem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));
  }
}

Todos.propType = {
    todos: PropTypes.array.isRequired
}

export default Todos;
