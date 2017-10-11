import React, { Component } from "react";
import Helmet from "react-helmet";
import Smooch from 'smooch'

import '../style/App.css';

class App extends Component {
  render() {
    return <div className="app">
                    <Helmet title="Smooch Webview example" />
    </div>;
  }

  componentDidMount() {
    Smooch.init({
      appId: '564f55ccc2aa7a2200db1e2a'
    });
  }
}

export default App;
