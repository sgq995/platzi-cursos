import { POSTS_ERROR, POSTS_GET_ALL, POSTS_GET_BY_USER, POSTS_LOADING } from "../types/posts";

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null,
};

const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_GET_ALL:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };

    case POSTS_GET_BY_USER:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };

    case POSTS_LOADING:
      return { ...state, loading: true };

    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default posts;
