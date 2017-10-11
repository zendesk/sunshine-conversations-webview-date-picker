import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import App from './components/App';
import Webview from './components/Webview';
import IframeEscape from "./components/IframeEscape";
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-snapshot';

const routes = [
  {
    path: "/",
    component: App,
    exact: true
  },
  {
    path: "/webview",
    component: Webview,
    exact: true
  },
  {
    path: "/iframe-escape",
    component: IframeEscape,
    exact: true
  }
];

const Root = () => {
  return <Router>
      <div>
            <Switch>
                {routes.map((route, i) => <Route key={i} {...route} />)}
            </Switch>
      </div>
  </Router>
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
