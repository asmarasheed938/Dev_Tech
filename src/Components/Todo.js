import React, {Component} from 'react';
import TodoItems from "./TodoItem";
import PropTypes from 'prop-types'
class Todo extends Component{
    markComplete=()=>{
        console.log('Hello')
    }

    render() {
        return this.props.todo.map((todo)=>(
            <TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
        ));
    }
}

// propTypes
Todo.propTypes={
    todo:PropTypes.array.isRequired
}
export default Todo;
