import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends React.Component {
    render() {
        return this.props.todos.map((item) => (
            <TodoItem key={item.id} todo={item} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}></TodoItem>
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;