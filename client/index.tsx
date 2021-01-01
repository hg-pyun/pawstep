import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'normalize.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './container/App';

console.log('init');
ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
