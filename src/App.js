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
    this.setState({ ...JSON.parse(localStorage.getItem("item") || "[]") });
  }

  setItemLocalStorage = () => {
    localStorage.setItem("item", JSON.stringify({ comments: this.state.comments }));
  }

  showAlert = () => {
    this.setState((prevState) => ({
      alert: !prevState.alert,
      author: "",
      comment: ""
    }));
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    const { comments, author, comment } = this.state;
    const date = Date.now();

    if (!author.trim() || !comment.trim()) {
      this.showAlert();
      setTimeout(() => {
        this.showAlert();
      }, 2000);
    } else {
      const newComment = comments.concat([
        {
          id: date,
          author: author,
          comment: comment,
          date: new Date(date).toLocaleString(),
        },
      ]);

      this.setState(
        {
          comments: newComment,
          author: "",
          comment: "",
        },
        this.setItemLocalStorage
      );
    }
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
    const { name, value } = event.target;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    const { comments, alert, author, comment } = this.state;

    return (
      <main className="container">
        <Header />
        <Form
          alert={alert}
          author={author}
          comment={comment}
          handleChange={this.handleChange}
          formSubmitHandler={this.formSubmitHandler}
        />

        <CommentList comments={comments} removeComment={this.removeComment} />
      </main>
    );
  }
}

export default App;
