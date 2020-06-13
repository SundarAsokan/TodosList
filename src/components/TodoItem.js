import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} ></input> {' '}
                {this.props.todo.title}
                <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, this.props.todo.id)}>X</button>
            </div>
        );
    }

}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    borderRadius: '100%',
    padding: '5px 9px',
    float: 'right',
    cursor: 'pointer'
}

export default TodoItem;