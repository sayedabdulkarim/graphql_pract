import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";

import App from "./component/App";
import SongList from "./component/SongList";
import SongCreate from "./component/SongCreate";

//
const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="song/new" component={SongCreate} />
        </Route>
      </Router>
      {/* <div>
        <SongList />
      </div> */}
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
