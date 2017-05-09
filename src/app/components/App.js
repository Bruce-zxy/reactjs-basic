import React from "react";

import {User} from "./User";
import {Main} from "./Main";

export class App extends React.Component {
  constructor() {
    super();
  }

  changeUsername(newName) {
  }

  render() {
    return (
      <div className="container">
        <Main changeUsername={this.changeUsername.bind(this)} />
        <User username="Max" />
      </div>
    );
  }
}
