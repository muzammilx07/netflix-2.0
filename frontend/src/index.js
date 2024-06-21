import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/store';
import ErrorBoundary from './utils/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
