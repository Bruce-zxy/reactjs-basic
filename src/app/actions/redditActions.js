import axios from "axios";

export function getPostsThunk() {
  return dispatch => {
    dispatch({ type: "GET_REDDIT_START" });

    axios.get("https://www.reddit.com/r/frontend.json")
      .then((response) => {
        console.log("Fulfilled with response: ", response);
        dispatch({
          type: "GET_REDDIT_SUCCESS",
          payload: response
        })
      })
      .catch((err) => {
        dispatch({
          type: "GET_REDDIT_FAIL",
          payload: err
        })
      })
  };
}

export function getPostsPromise() {
  return {
    type: "GET_REDDIT",
    payload: axios.get("https://www.reddit.com/r/frontend.json")
  }
}
