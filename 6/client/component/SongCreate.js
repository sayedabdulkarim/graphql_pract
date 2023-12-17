import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      title: "",
    };

    // Bind methods to the instance
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // Update state
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state, " formm");
  }

  render() {
    return (
      <div>
        <h1>SongCreate</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Song Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SongCreate;
