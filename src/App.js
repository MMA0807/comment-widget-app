import React, { Component } from "react";
import { Form } from "./Components/Form/Form";
import { CommentList } from "./Components/Comment/CommentList";
import { Header } from "./Components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      item: [],
      author: "",
      comment: "",
      alert: false,
    };
  }

  componentDidMount() {
    this.setState({ ...JSON.parse(localStorage.getItem("comments") || "[]") });
  }

  setItemLocalStorage = () =>
    localStorage.setItem("comments", JSON.stringify({ item: this.state.item }));

  showAlert = () => {
    this.setState((prevState) => ({
      alert: !prevState.alert,
      author: "",
      comment: ""
    }));
  };

  formSubmitHandler = (e) => {
    e.preventDefault();
    const { item, author, comment } = this.state;
    const date = Date.now();

    if (!author.trim() || !comment.trim()) {
      this.showAlert();
      setTimeout(() => {
        this.showAlert();
      }, 2000);
    } else {
      const newItem = item.concat([
        {
          id: date,
          author: author,
          comment: comment,
          date: new Date(date).toLocaleString(),
        },
      ]);

      this.setState(
        {
          item: newItem,
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
        item: prevState.item.filter((comment) => comment.id !== id),
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
    const { item, alert, author, comment } = this.state;

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

        <CommentList item={item} removeComment={this.removeComment} />
      </main>
    );
  }
}

export default App;
