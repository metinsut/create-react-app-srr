import { combineReducers } from "redux";
import usersReducer from "./userReducer";
import postReducer from "./postReducer";

export default combineReducers({
   users: usersReducer,
   posts: postReducer
})