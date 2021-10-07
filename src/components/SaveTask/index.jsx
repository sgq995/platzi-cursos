import { Component } from "react";
import { connect } from "react-redux";

import * as tasksActions from "../../actions/tasks";

class SaveTask extends Component {
  switchUserId = (event) => {
    this.props.switchUserId(event.target.value);
  }

  switchTitle = (event) => {
    this.props.switchTitle(event.target.value);
  }

  save = () => {
    const { userId, title, addTask } = this.props;
    const newTask = {
      userId,
      title,
      completed: false
    };

    addTask(newTask);
  }

  render() {
    return (
      <div>
        <h1>Save task</h1>
        User id:
        <input
          type="number"
          value={this.props.userId}
          onChange={this.switchUserId}
        />

        <br /><br />
        Title:
        <input
          type="text"
          value={this.props.title}
          onChange={this.switchTitle}
        />

        <br /><br />
        <button onClick={this.save}>Save</button>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.tasks;
}

export default connect(mapStateToProps, tasksActions)(SaveTask);
