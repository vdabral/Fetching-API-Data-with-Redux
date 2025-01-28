import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 API
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// Create root for rendering the app using React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
