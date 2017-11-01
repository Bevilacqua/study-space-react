import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import "./index.css";
import store, { history } from "./config/store";
import MainMap from "./screens/MainMap.js";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={MainMap} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
