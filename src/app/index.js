import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory} from "react-router";

import {Root} from "./components/Root";
import {Home} from "./components/Home";
import {User} from "./components/User";

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path={"user"} component={User} />
        <Route path={"home"} component={Home} />
      </Router>
    );
  }
}

render(<App />, window.document.getElementById("app"));
