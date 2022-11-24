import axios from "axios";
import { POSTS_ERROR, POSTS_GET_ALL, POSTS_UPDATE, POSTS_LOADING, POSTS_COMMENTS_LOADING, POSTS_COMMENTS_ERROR, POSTS_COMMENTS_UPDATE } from "../types/posts";
import { USERS_GET_ALL } from "../types/users";

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
  const { posts } = getState().posts;
  const userId = users[key].id;

  dispatch({
    type: POSTS_LOADING,
  });

  try {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const news = response.data.map((post) => ({
      ...post,
      comments: [],
      isOpen: false,
    }));

    const updatedPosts = [
      ...posts,
      news,
    ];

    dispatch({
      type: POSTS_UPDATE,
      payload: updatedPosts,
    });

    const postsKey = updatedPosts.length - 1;
    const updatedUsers = [...users];
    updatedUsers[key] = {
      ...users[key],
      postsKey
    }

    dispatch({
      type: USERS_GET_ALL,
      payload: updatedUsers,
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: err.message
    })
  }
};

export const openClose = (postsKey, idx) => async (dispatch, getState) => {
  const { posts } = getState().posts;
  const selected = posts[postsKey][idx];

  const updated = {
    ...selected,
    isOpen: !selected.isOpen,
  };

  const updatedPosts = [...posts];
  updatedPosts[postsKey] = [
    ...posts[postsKey]
  ];

  updatedPosts[postsKey][idx] = updated;

  dispatch({
    type: POSTS_UPDATE,
    payload: updatedPosts,
  });
}

export const getComments = (postsKey, idx) => async (dispatch, getState) => {
  const { posts } = getState().posts;
  const selected = posts[postsKey][idx];

  dispatch({
    type: POSTS_COMMENTS_LOADING,
  });

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${selected.id}`);

    const updated = {
      ...selected,
      comments: response.data,
    };

    const updatedPosts = [...posts];
    updatedPosts[postsKey] = [
      ...posts[postsKey]
    ];

    updatedPosts[postsKey][idx] = updated;

    dispatch({
      type: POSTS_COMMENTS_UPDATE,
      payload: updatedPosts,
    });
  } catch (err) {
    dispatch({
      type: POSTS_COMMENTS_ERROR,
      payload: err.message,
    });
  }
}
