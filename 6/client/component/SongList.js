import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";

const SongList = (props) => {
  const { data, mutate } = props;

  const onSongDelete = (id) => {
    mutate({
      variables: { id },
      //   refetchQueries: [{ query }],
    })
      .then(() => {
        props.data.refetch();
        // Optionally handle UI update or other actions post deletion
      })
      .catch((err) => {
        // Error handling
        console.error("Error deleting song:", err);
      });
  };

  return (
    <div>
      <h1 onClick={() => console.log(props, " thiss")}>SongList</h1>
      {data.loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul className="collection">
            {data.songs.map((item) => (
              <li key={item.id} className="collection_item">
                <Link to={`songs/${item.id}`}>{item.title}</Link>
                <i
                  className="material-icons"
                  onClick={() => onSongDelete(item.id)}
                >
                  delete
                </i>
              </li>
            ))}
          </ul>
          <hr />
          <Link to="/songs/new" className="btn-floating btn-large red right">
            Add New Song
          </Link>
        </div>
      )}
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));
