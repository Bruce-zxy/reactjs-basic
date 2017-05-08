import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      homeLink: props.initialLinkName,
      status: 0
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    }, 3000);
  }

  onMakeOlder() {
    this.setState(
      {
        age: this.state.age + 3
      }
    );
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    })
  }

  render() {
    return(
      <div>
        <p>In a new Component</p>
        <p>Your name is {this.props.name}, your age is {this.state.age} </p>
        <p>Status: {this.state.status}</p>
        <hr/>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older 1!</button>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older 2!</button>
        <hr/>
        <button onClick={this.props.greet} className="btn btn-normal">Greet</button>
        <hr/>
        <input type="text"
          value={this.state.homeLink}
          onChange={(event) => this.onHandleChange(event)}/>
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-normal">Change Header Linke</button>

      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
};
