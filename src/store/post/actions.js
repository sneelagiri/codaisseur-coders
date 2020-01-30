import api from "../../api";
export function fetchPost(id) {
  console.log("Stage 2");

  return function thunk(dispatch, getState) {
    api(`/posts/${id}`).then(post => {
      dispatch(setPost(post));
    });
    api(`/posts/${id}/comments`).then(comments => {
      dispatch(setComments(comments));
    });
  };
}

export function setPost(data) {
  console.log("Stage 3: Dispatch", data);

  return {
    type: "POST",
    payload: data
  };
}

export function setComments(data) {
  console.log("Stage 3: Dispatch", data);

  return {
    type: "COMMENTS",
    payload: data
  };
}
