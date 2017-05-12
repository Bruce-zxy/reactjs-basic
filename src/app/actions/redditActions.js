import axios from "axios";

export function getPostsThunk() {
  return dispatch => {
    dispatch({ type: "GET_POSTS_START" });

    axios.get("https://www.reddit.com/r/frontend.json")
      .then((response) => {
        console.log("Fulfilled with response: ", response);
        dispatch({
          type: "GET_POSTS_SUCCESS",
          payload: response
        })
      })
      .catch((err) => {
        dispatch({
          type: "GET_POSTS_FAIL",
          payload: err
        })
      })
  };
}

export function getPostsPromise() {
  return {
    type: "GET_POSTS",
    payload: axios.get("https://www.reddit.com/r/frontend.json")
  }
}
