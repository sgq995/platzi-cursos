import axios from "axios";
import { USERS_ERROR, USERS_GET_ALL, USERS_LOADING } from "../types/users";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: USERS_LOADING
  });

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    dispatch({
      type: USERS_GET_ALL,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);

    dispatch({
      type: USERS_ERROR,
      payload: err.message,
    });
  }
}
