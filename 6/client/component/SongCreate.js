import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetchSongs";

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
    console.log({ state: this.state, props: this.props }, " formm");
    // this.props.mutate({
    //   variables: {
    //     title: this.state.title,
    //   },
    // });
    this.props
      .mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{ query }],
      })
      .then((response) => {
        console.log("Mutation response:", response);
        // Additional logic after mutation
        hashHistory.push("/");
      })
      .catch((error) => {
        console.error("Mutation error:", error);
        // Error handling
      });
  }

  render() {
    return (
      <div>
        <Link to="/">Go Back To Home</Link>
        <h1 onClick={() => console.log(this.props, " thiss")}>SongCreate</h1>
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

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
