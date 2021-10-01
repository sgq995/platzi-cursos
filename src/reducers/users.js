import { ERROR, GET_ALL, LOADING } from "../types/users";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null,
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case LOADING:
      return { ...state, loading: true };

    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default users;
