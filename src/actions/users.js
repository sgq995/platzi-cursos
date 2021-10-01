import axios from "axios";
import { ERROR, GET_ALL, LOADING } from "../types/users";

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING
  });

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    dispatch({
      type: GET_ALL,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);

    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
}
