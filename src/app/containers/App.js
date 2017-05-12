import React from "react";
import {connect} from "react-redux";

import {User} from "../components/User";
import {Main} from "../components/Main";
import {setNameThunk, setNamePromise, setAge} from "../actions/userActions";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Main
          changeUsernameThunk={(name) => this.props.setNameThunk(name)}
          changeUsernamePromise={(name) => this.props.setNamePromise(name)}
        />
        <User username={this.props.user.name} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setNameThunk: (name) => {
      dispatch(setNameThunk(name))
    },
    setNamePromise: (name) => {
      dispatch(setNamePromise(name))
    },
    setAge: (age) => {
      dispatch(setAge(age))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
