import { TASKS_ADDED, TASKS_ERROR, TASKS_GET_ALL, TASKS_LOADING, TASKS_SWITCH_TITLE, TASKS_SWITCH_USER } from "../types/tasks";

const INITIAL_STATE = {
  tasks: [],
  loading: false,
  error: null,
  userId: '',
  title: '',
};

const tasks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TASKS_GET_ALL:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: null,
      };

    case TASKS_LOADING:
      return { ...state, loading: true };

    case TASKS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case TASKS_SWITCH_USER:
      return {
        ...state,
        userId: action.payload,
      };

    case TASKS_SWITCH_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    case TASKS_ADDED:
      return {
        ...state,
        tasks: {},
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}

export default tasks;
