import React, { Component, lazy } from "react";
import CommentListContainer from "./Components/Comment/CommentListContainer";
import { Header } from "./Components/Header";

const FormContainer = lazy(() => import('./Components/Form/FormContainer'))

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
              ? this.state.comments.reduce((previousValue, currentItem) => (previousValue.id > currentItem.id ? previousValue : currentItem)).id + 1
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
        <React.Suspense fallback={<p>Loading...</p>}>
          <FormContainer addCommentHandler={this.addCommentHandler} />
        </React.Suspense>

        <CommentListContainer
          comments={this.state.comments}
          removeCommentHandler={this.removeCommentHandler}
        />
      </div>
    );
  }
}

export default App;