import React, { Component } from "react";
import Helmet from "react-helmet";
import Smooch from 'smooch'
import logo from "../logo.svg";

import '../style/App.css';

class App extends Component {
  render() {
    return <div className="app">
              <Helmet title="Smooch Webview example" />
              <div className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h2>Smooch Webview Date Picker Example</h2>
              </div>
              <div className="app-intro">
                To get started, type something into the chat window below.
              </div>
    </div>;
  }

  componentDidMount() {
    Smooch.init({
      appId: '564f55ccc2aa7a2200db1e2a'
    }).then(() => {
      Smooch.open();
    });
  }
}

export default App;
