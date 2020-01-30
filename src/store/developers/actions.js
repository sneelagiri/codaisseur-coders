// src/store/developers/actions.js
import api from "../../api";
export function fetchDevelopers(dispatch, getState) {
  api("/developers").then(data => {
    // note: just `dispatch` here now
    console.log("Stage 2: Fetch Developers");
    dispatch(developersFetched(data));
  });
}

export function developersFetched(data) {
  console.log("Stage 3: Dispatch");

  return {
    type: "developers/FETCHED",
    payload: data
  };
}
