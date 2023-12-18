import React from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import { Link } from "react-router";
import LyicsCreate from "./LyicsCreate";
import LyricsList from "./LyricsList";

const SongDetails = (props) => {
  // Destructuring data from props
  const { data } = props;
  const { loading, song } = data;

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(props, " pppppppppp");
  return (
    <div>
      <Link to={"/"}>Back</Link>
      <h1>SongDetails</h1>
      <h2>{song.title}</h2> {/* Display the song title */}
      {/*  */}
      <LyicsCreate />
      {/*  */}
      <LyricsList />
    </div>
  );
};

export default graphql(fetchSong, {
  options: (props) => ({
    variables: { id: props.params.id }, // Correctly access the id
  }),
})(SongDetails);
