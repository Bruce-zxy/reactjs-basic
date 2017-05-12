import React from "react";
import {connect} from "react-redux";

import {Main} from "../components/Main";
import {User} from "../components/User";
import {Posts} from "../components/Posts";

import {setNameThunk, setNamePromise, setAge} from "../actions/userActions";

class App extends React.Component {
  render() {
    let posts = [
      {
        title: "Chris"
      },
      {
        title: "xyz"
      }
    ];

    return (
      <div className="container">
        <hr/>
        <p>
          <strong>Here is the area for Main</strong>
        </p>
        <Main
          changeUsernameThunk={(name) => this.props.setNameThunk(name)}
          changeUsernamePromise={(name) => this.props.setNamePromise(name)}
        />
        <hr/>
        <p >
          <strong>Here is the area for User</strong>
        </p>
        <User username={this.props.user.name} />
        <hr/>
        <p>
          <strong>Here is the area for Posts</strong>
        </p>
        <Posts posts={posts} />
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
