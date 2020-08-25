import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as React from "react";
import { render } from 'react-dom';
import { AppProvider } from './context';
import App from './components/App';

render(
  <AppProvider>
    <App />
  </AppProvider>, document.getElementById('root'),
);