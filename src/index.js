import React from "react";
import { createRoot } from "react-dom/client";
import  App  from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./redux/reducers/index";
import { BrowserRouter as Router } from "react-router-dom";
const store = createStore(reducer);
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Router>
        
    <App />
    </Router>
  </Provider>
);
