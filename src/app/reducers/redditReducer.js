
const redditReducer = (state = {
    lastUpdated: new Date(),
    responseChildren: []
  },
  action) => {
  switch (action.type) {
    case "GET_POSTS_START":
    case "GET_POSTS":
      return state;
      break;
    case "GET_POSTS_SUCCESS":
    case "GET_POSTS_FULFILLED":
      state = {
        lastUpdated: new Date(),
        responseChildren: action.payload.data.data.children
      };
    break;
    case "GET_POSTS_ERROR":
      return state;
      break;
  }
  return state;
};

export default redditReducer;
