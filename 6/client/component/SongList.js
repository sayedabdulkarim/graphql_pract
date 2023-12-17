import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = ({ data }) => {
  console.log({ data, loading: data.loading }, " props from sonlist");
  return (
    <div>
      <h1>SongList</h1>
      {data.loading ? (
        <h1>Loading........</h1>
      ) : (
        <ul className="collection">
          {data.songs.map((item) => {
            const { id, title } = item;
            return (
              <li key={id} className="collection_item">
                {title}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const query = gql`
  {
    songs {
      title
      id
    }
  }
`;

// export default SongList;
export default graphql(query)(SongList);
