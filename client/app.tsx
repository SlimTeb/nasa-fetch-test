import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routing/AppRouter";

ReactDOM.render(<AppRouter />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept("./routing/AppRouter", () => {
    const NewAppRouter = require("./routing/AppRouter").default; //eslint-disable-line
    ReactDOM.render(<NewAppRouter />, document.getElementById("app"));
  });
}
