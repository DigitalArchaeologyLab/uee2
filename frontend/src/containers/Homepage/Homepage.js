import React, { Component } from "react";
import { Link } from "react-router-dom";
import MarkdownTest from "../components/MarkdownTest/MarkdownTest";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the UEE</h1>
        <Link to="/articles">View articles</Link>
        <MarkdownTest />
      </div>
    );
  }
}

export default Homepage;
