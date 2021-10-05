import axios from "axios";
import { POSTS_ERROR, POSTS_GET_ALL, POSTS_GET_BY_USER, POSTS_LOADING } from "../types/posts";

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

export const getByUser = (key) => async (dispatch, getState) => {
  const { users } = getState().users;
  const userId = users[key].id;

  const response = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  dispatch({
    type: POSTS_GET_BY_USER,
    payload: response.data,
  });
};
