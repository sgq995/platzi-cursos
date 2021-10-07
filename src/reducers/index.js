import { combineReducers } from "redux";
import users from "./users";
import posts from "./posts";
import tasks from "./tasks";

export default combineReducers({
  users,
  posts,
  tasks,
});
