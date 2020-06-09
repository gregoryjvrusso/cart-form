import React from 'react';
import ReactDOM from 'react-dom';
import Payment from './pages/Payment';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Payment />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
