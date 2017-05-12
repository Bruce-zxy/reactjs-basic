
const redditReducer = (state = {
    lastUpdated: new Date(),
    response: {}
  },
  action) => {
  switch (action.type) {
    case "GET_POSTS_START":
    case "GET_POSTS":
      return state;
      break;
    case "GET_POSTS_FULFILLED":
      state = {
        lastUpdated: new Date(),
        response: action.payload
      };
      break;
  }
  return state;
};

export default redditReducer;
