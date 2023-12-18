import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricsCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { lyric: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ lyric: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { lyric } = this.state;

    this.props
      .mutate({
        variables: {
          content: lyric,
          songId: this.props.songId, // Assuming `songId` is passed as a prop
        },
        // Optional: Add refetchQueries if needed to update the UI
      })
      .then(() => {
        this.setState({ lyric: "" }); // Reset input field after submission
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a Lyric</label>
          <input value={this.state.lyric} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricsCreate);
