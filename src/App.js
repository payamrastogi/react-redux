import React from "react";
import { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import {store} from "./store";




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
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["react", "elm", "java"]}/>
    ];
  }
}

export default App;
