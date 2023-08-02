import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      errors: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { task } = this.state;
    if (task.trim() === '') {
      this.setState({ errors: ['Task cannot be empty'] });
    } else {
      this.props.onTaskAdd(task.trim());
      this.setState({ task: '', errors: [] });
    }
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({ task: value });
  };

  render() {
    const { task, errors } = this.state;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="task"
              placeholder="Type a new task here"
              value={task}
              onChange={this.handleInputChange}
            />

            <button type="submit" disabled={errors.length > 0}>
              Add&nbsp;Task
            </button>
          </div>
          {errors.length > 0 &&
            errors.map((error, index) => (
              <li key={index} className="error">
                {error}
              </li>
            ))}
        </form>
      </>
    );
  }
}

export default TodoForm;
