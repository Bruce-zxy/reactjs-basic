import React from "react";

export const Main = (props) => {
  return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>The Main Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <button
              className="btn btn-normal"
              onClick={() => props.changeUsernameThunk('Thunk')}
            >
              Name: Thunk
            </button>
            <button
              className="btn btn-primary"
              onClick={() => props.changeUsernamePromise('Promise')}
            >
              Name: Promise
            </button>
            <button
              className="btn btn-normal"
              onClick={() => props.getPostsThunk()}
            >
              Posts: Thunk
            </button>
            <button
              className="btn btn-primary"
              onClick={() => props.getPostsThunk()}
            >
              Posts: Promise
            </button>
          </div>
        </div>
      </div>
  );
}
