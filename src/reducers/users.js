import { USERS_ERROR, USERS_GET_ALL, USERS_LOADING } from "../types/users";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: null,
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_GET_ALL:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: null,
      };

    case USERS_LOADING:
      return { ...state, loading: true };

    case USERS_ERROR:
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
