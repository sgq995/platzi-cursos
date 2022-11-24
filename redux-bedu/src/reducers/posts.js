import { POSTS_ERROR, POSTS_GET_ALL, POSTS_UPDATE, POSTS_LOADING, POSTS_COMMENTS_ERROR, POSTS_COMMENTS_LOADING, POSTS_COMMENTS_UPDATE } from "../types/posts";

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null,
  commentsLoading: false,
  commentsError: null,
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

    case POSTS_UPDATE:
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

    case POSTS_COMMENTS_UPDATE:
      return {
        ...state,
        posts: action.payload,
        commentsLoading: false,
        commentsError: null,
      };

    case POSTS_COMMENTS_LOADING:
      return { ...state, commentsLoading: true };

    case POSTS_COMMENTS_ERROR:
      return {
        ...state,
        commentsError: action.payload,
        commentsLoading: false,
      };


    default:
      return state;
  }
}

export default posts;
