import axios from "axios";
import { TASKS_ADDED, TASKS_ERROR, TASKS_GET_ALL, TASKS_LOADING, TASKS_SWITCH_TITLE, TASKS_SWITCH_USER } from "../types/tasks";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: TASKS_LOADING
  });

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

    const tasks = {};
    response.data.forEach((task) => {
      tasks[task.userId] = {
        ...tasks[task.userId],
        [task.id]: {
          ...task,
        },
      }
    });

    dispatch({
      type: TASKS_GET_ALL,
      payload: tasks,
    });
  } catch (err) {
    console.error(err);

    dispatch({
      type: TASKS_ERROR,
      payload: err.message,
    });
  }
}

export const switchUserId = (userId) => (dispatch) => {
  dispatch({
    type: TASKS_SWITCH_USER,
    payload: userId
  });
}

export const switchTitle = (title) => (dispatch) => {
  dispatch({
    type: TASKS_SWITCH_TITLE,
    payload: title
  });
}

export const addTask = (task) => async (dispatch) => {
  dispatch({
    type: TASKS_LOADING
  });

  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', task);

    dispatch({
      type: TASKS_ADDED,
    });
  } catch (err) {
    dispatch({
      type: TASKS_ERROR,
      payload: err.message
    });
  }
}


