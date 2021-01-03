import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './home';
import Gateway from './gateway';
import Write from './write';

type App = {};

function App(props: App) {
  return (
    <HashRouter>
      <Route exact path={'/'}>
        <Home />
      </Route>
      <Route exact path={'/gateway'}>
        <Gateway />
      </Route>
      <Route exact path={'/write'}>
        <Write />
      </Route>
    </HashRouter>
  );
}

export default hot(App);
