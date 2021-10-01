import axios from "axios";
import { GET_ALL } from "../types/users";

export const getAll = () => async (dispatch) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    // .then((response) => {
      // setUsers(response.data.map((user) => {
      //   return {
      //     id: user.id,
      //     name: user.name,
      //     email: user.email,
      //     link: user.website,
      //   }
      // }));
    // });

  dispatch({
    type: GET_ALL,
    payload: response.data,
  });
}
