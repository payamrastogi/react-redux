import React from "react";
import { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from "redux";
import reducer from "./reducers";

const initialState = {
  tech: "react"
};
const store = createStore(reducer, initialState);

class App extends Component {
  //to use redux
  //we need to remove
  //state from the App
  //------
  //state = {
  //  tech: "react"
  //};
  //------
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
