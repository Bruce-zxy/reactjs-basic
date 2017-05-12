
const redditReducer = (state = {
    lastUpdated: new Date(),
    responseChildren: []
  },
  action) => {
  switch (action.type) {
    case "GET_REDDIT_START":
    case "GET_REDDIT":
      return state;
      break;
    case "GET_REDDIT_SUCCESS":
    case "GET_REDDIT_FULFILLED":
      state = {
        lastUpdated: new Date(),
        responseChildren: action.payload.data.data.children
      };
    break;
    case "GET_REDDIT_REJECTED":
    case "GET_REDDIT_FAIL":
      return state;
      break;
  }
  return state;
};

export default redditReducer;
