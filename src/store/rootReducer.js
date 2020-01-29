import { combineReducers } from "redux";
import developers from "./developers/reducer";
export default combineReducers({
  havingFun: havingFunReducer,
  developers: developers
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
