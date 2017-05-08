import React from "react";

export class Home extends React.Component {
  render() {
    var text = "Something!";

    console.log(this.props);

    return(
      <div>
        <p>In a new Component</p>
        <p>{text}</p>
        <p>Your name is {this.props.name}, your age is {this.props.age} </p>
        <p>User Object => Name: {this.props.user.name}, Hobbies: {this.props.age} </p>
        <div>
          <h4>Hobbies:</h4>
          <ul>
            {this.props.user.hobbies.map((hobby, idx) => <li key={idx}>{idx + 1}. {hobby}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}
