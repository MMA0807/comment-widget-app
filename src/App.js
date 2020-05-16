import React, { Component } from "react";
import { Form } from "./Components/Form";
import { Comments } from "./Components/Comments";
import { Header } from "./Components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    localStorage.getItem("state") && this.setState({ ...JSON.parse(localStorage.getItem("state")) });
  }

  addCommentHandler = (name, value) => {
    const date = new Date();
    const localTime = date.toLocaleTimeString();
    const localDate = date.toLocaleDateString();

    this.setState(
      {
        comments: [
          ...this.state.comments,
          {
            id: this.state.comments.length
              ? this.state.comments.reduce((p, c) => (p.id > c.id ? p : c)).id + 1
              : 1,
            name: name,
            value: value,
            date: localDate,
            time: localTime,
          },
        ],
      },
      () => localStorage.setItem("state", JSON.stringify(this.state))
    );
  };

  removeCommentHandler = (id) => {
    this.setState(
      {
        comments: this.state.comments.filter((comment) => comment.id !== id),
      },
      () => localStorage.setItem("state", JSON.stringify(this.state))
    );
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Form addCommentHandler={this.addCommentHandler} />

        <Comments
          comments={this.state.comments}
          removeCommentHandler={this.removeCommentHandler}
        />
      </div>
    );
  }
}

export default App;