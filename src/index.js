import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "materialize-css/dist/css/materialize.min.css";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import rootReducer from "./reducers/";

const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
