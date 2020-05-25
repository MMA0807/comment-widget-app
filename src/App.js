import React, { Component } from "react";
import { Form } from "./Components/Form/Form";
import { CommentList } from "./Components/Comment/CommentList";
import { Header } from "./Components/Header";

class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      author: '',
      comment: ''
    };

  }

  componentDidMount() {
    localStorage.getItem("state") && this.setState({ ...JSON.parse(localStorage.getItem("state")) });
  }

  setItemLocalStorage = () => localStorage.setItem("state", JSON.stringify(this.state))

  addCommentHandler = () => {
    const state = this.state
    const comments = [...this.state.comments]
    const date = new Date();
    const localTime = date.toLocaleTimeString();
    const localDate = date.toLocaleDateString();

    if((state.author.trim() === '') || (state.comment.trim() === '')) {
      alert('Введите данные')
    } else {
      comments.push({
        id: comments.length ? comments.length + 1 : 1, 
        author: state.author, 
        comment: state.comment, 
        time: localTime, 
        date: localDate
      })
    }

    this.setState({
      comments,
      author: '',
      comment: '',
    },
      this.setItemLocalStorage.bind(this)
    );

  };

  removeCommentHandler = (id) => {
    this.setState(
      {
        comments: this.state.comments.filter((comment) => comment.id !== id),
      },
      this.setItemLocalStorage.bind(this)
      );
  };

  handleChange(event) {
    const target = event.target
    const name = target.name

    this.setState({
      [name]: target.value
    })
  }

  submitHandler(e) {
    e.preventDefault()
    this.addCommentHandler()
  }

  render() {
    

    return (
      <div className="container">
        <Header />
        <Form 
          comments={this.state}
          handleChange={this.handleChange.bind(this)}  
          submitHandler={this.submitHandler.bind(this)}
        />

        <CommentList
          comments={this.state}
          removeCommentHandler={this.removeCommentHandler}
        />
      </div>
    );
  }
}

export default App;