// src/store/developers/reducer.js
const initialState = {};
export default function posts(state = initialState, action) {
  switch (action.type) {
    case "POST": {
      // => Ask yourself: what is action.payload?

      return { ...state, post: action.payload };
    }
    case "COMMENTS": {
      return { ...state, comments: action.payload };
    }
    default: {
      return state;
    }
  }
}
