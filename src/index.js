import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './reduxToolkit/reduxStore';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Header/>
          <App />
          <Footer/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
