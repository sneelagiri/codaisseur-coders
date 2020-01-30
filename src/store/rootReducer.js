import { combineReducers } from "redux";
import developers from "./developers/reducer";
import posts from "./post/reducer";

export default combineReducers({
  havingFun: havingFunReducer,
  developers: developers,
  posts: posts
  // we can add more "slice" subreducers here later on...
});
function havingFunReducer(state = "yes", action) {
  switch (action.type) {
    case "SET_HAVING_FUN": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
