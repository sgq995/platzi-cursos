import { Component } from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import Fatal from "../Fatal";

import * as tasksActions from "../../actions/tasks";
import { Link } from "react-router-dom";

class Tasks extends Component {
  componentDidMount() {
    if (Object.keys(this.props.tasks).length === 0) {
      this.props.getAll();
    }
  }

  showContent = () => {
    const { tasks, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <Fatal message={error} />
    }

    return Object.keys(tasks).map((userId) => (
      <div key={userId}>
        <h2>Usuario {userId}</h2>
        <div className="tasks__container">
          {this.putTasks(userId)}
        </div>
      </div>
    ));
  };

  putTasks = (userId) => {
    const { tasks } = this.props;
    const tasksByUser = {
      ...tasks[userId]
    };

    return Object.keys(tasksByUser).map((taskId) => (
      <div key={taskId}>
        <input type="checkbox" defaultChecked={tasksByUser[taskId].completed} />
        {tasksByUser[taskId].title}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <Link to="/tasks/save">
          <button>
            Agregar
          </button>
        </Link>
        {this.showContent()}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.tasks;
}

export default connect(mapStateToProps, tasksActions)(Tasks);
