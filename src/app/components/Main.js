import React from "react";
import { Button } from "antd";

// import Button from "antd/lib/button";
// import "antd/lib/button/style/css"; // 或者 antd/lib/button/style/css 加载 css 文件

export const Main = (props) => {
  return(
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>The Main Page</h1>
          </div>
        </div>
        <div>
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
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
              onClick={() => props.getPostsPromise()}
            >
              Posts: Promise
            </button>
          </div>
        </div>
      </div>
  );
}
