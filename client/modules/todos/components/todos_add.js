import React from 'react';

class TodosAdd extends React.Component {

  handleSubmit(event) {

    event.preventDefault();

    const {todo_name} = this.refs;

    const {todosAdd} = this.props;

    todosAdd(todo_name.value);

  }

  render() {
    return(
      <div>
        <h1>Add Todo</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label htmlFor=""></label>
            <input type="text" placeholder="Todo item here" ref="todo_name"/>
          </div>

          <div>
            <button>Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodosAdd;
