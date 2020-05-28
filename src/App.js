import React, { Component } from "react";
import { Form } from "./Components/Form/Form";
import { CommentList } from "./Components/Comment/CommentList";
import { Header } from "./Components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      author: "",
      comment: "",
      alert: false,
    };
  }

  componentDidMount() {
    this.setState({ ...JSON.parse(localStorage.getItem("state") || "[]") });
  }

  setItemLocalStorage = () => localStorage.setItem("state", JSON.stringify({ comments: this.state.comments }));

  showAlert = () => {
    this.setState({
      alert: true,
    });
  };

  hideAlert = () => {
    this.setState({
      alert: false,
    });
  };

  addComment = () => {
    const { comments, author, comment } = this.state;
    const date = Date.now();

    if (!author.trim() || !comment.trim()) {
      this.showAlert();
      setTimeout(() => {
        this.hideAlert();
      }, 3000);
    } else {
      comments.push({
        id: date,
        author: author,
        comment: comment,
        date: new Date(date).toLocaleString(),
      });
    }

    this.setState(
      {
        author: "",
        comment: "",
      },
      this.setItemLocalStorage
    );
  };

  removeComment = (id) => {
    this.setState(
      (prevState) => ({
        comments: prevState.comments.filter((comment) => comment.id !== id),
      }),
      this.setItemLocalStorage
    );
  };

  handleChange = (event) => {
    const {name, value} = event.target
    
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.addComment();
  };

  render() {
    return (
      <main className="container">
        <Header />
        <Form
          alert={this.state.alert}
          author={this.state.author}
          comment={this.state.comment}
          handleChange={this.handleChange}
          submitHandler={this.submitHandler}
        />

        <CommentList
          comments={this.state.comments}
          removeComment={this.removeComment}
        />
      </main>
    );
  }
}

export default App;
