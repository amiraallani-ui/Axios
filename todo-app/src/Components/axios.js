import React, { Component } from "react";
import axios from "axios";

export default class Axios extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      this.setState({ posts: res.data });
    });
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        userId: "1",
        title: "Newpost",
      })
      .then((res) => {
        console.log(res);
      });
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "allani amira",
      })
      .then((res) => {
        console.log(res);
      });
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/50")
      .then((res) => {
        console.log(res);
      });
  }
  render() {
    return (
      <div>
        <h1>List of posts</h1>
        {this.state.posts.map((el) => (
          <div>
            <h3>the title is:</h3>
            {el.title}{" "}
          </div>
        ))}
      </div>
    );
  }
}
