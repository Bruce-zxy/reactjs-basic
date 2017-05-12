import React from "react";
import {connect} from "react-redux";

import {Main} from "../components/Main";
import {User} from "../components/User";
import {Reddit} from "../components/Reddit";

import {setNameThunk, setNamePromise, setAge} from "../actions/userActions";
import {getPostsThunk, getPostsPromise} from "../actions/redditActions";

class App extends React.Component {
  render() {
    let articles = [
      {
        data: {title: "Chris"}
      },
      {
        data: {title: "xyz"}
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
          getPostsThunk={() => this.props.getPostsThunk(name)}
          getPostsPromise={() => this.props.getPostsPromise(name)}
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
        <Reddit articles={articles} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math,
    reddit: state.reddit
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsThunk: () => {
      dispatch(getPostsThunk())
    },
    getPostsPromise: () => {
      dispatch(getPostsPromise())
    },
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
