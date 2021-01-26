import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Gateway from './gateway';
import Write from './write';
import { RecoilRoot } from 'recoil';

type App = {};

function App(props: App) {
  return (
    <RecoilRoot>
      <HashRouter>
        <Switch>
          <Route path={'/gateway'}>
            <Gateway />
          </Route>
          <Route path={'/write/:id'}>
            <Write title={'수정하기'}/>
          </Route>
          <Route path={'/write'}>
            <Write title={'기록하기'}/>
          </Route>
          <Route path={'/'}>
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </RecoilRoot>
  );
}

export default hot(App);
