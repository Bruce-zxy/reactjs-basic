export function setNameThunk(name) {
  // return a function
  // the function will be invoked by reducer
  return dispatch => {
    console.log("setNameThunk return function start");

    dispatch({
      type: "SET_NAME_START",
    });

    setTimeout(() => {
      dispatch({
        type: "SET_NAME_FULFILLED",
        payload: name
      })
    }, 2000)
  };
}

export function setNamePromise(name) {
  // return a dispatch with a promise as payload
  // the promise will automatically invoke dispatch when success or fail
  return {
    type: "SET_NAME",
    payload: new Promise((resolve, reject) => {
      setTimeout(
        () => { resolve(name); }, // this is the function which will be invoked when success
        2000
      );
    })
  }
}

export function setAge(age) {
  return {
    type: "SET_AGE",
    payload: age
  };
}
