import React, { Component } from 'react';
import Header from "./components/Header"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <Header />
        </div>
        <div class="row">
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}

export default App;
