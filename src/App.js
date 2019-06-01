import React from "react";
import { Component } from "react";
import HelloWorld from "./HelloWorld";

class App extends Component {
  state = {
    tech: "react"
  };

  render() {
    return <HelloWorld tech={this.state.tech} />;
  }
}

export default App;
