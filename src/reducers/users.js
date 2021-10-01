const INITIAL_STATE = {
  users: [],
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return { ...state, users: action.payload };

    default:
      return state;
  }
}

export default users;
