import axios from "axios";
import { POSTS_ERROR, POSTS_GET_ALL, POSTS_LOADING } from "../types/posts";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: POSTS_LOADING,
  });

  try {
    const response = await axios.get('http://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: POSTS_GET_ALL,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
    
    dispatch({
      type: POSTS_ERROR,
      payload: err.message,
    });
  }
};
