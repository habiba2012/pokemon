/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./styles/styles.css";
import "./styles/responsive.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
