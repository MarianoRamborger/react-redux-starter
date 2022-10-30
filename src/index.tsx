import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Main} from './Containers/index'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './Store/store';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
          <Routes>
              <Route path='/' element={<Main/>} /> 
          </Routes>
          </Provider>
      </BrowserRouter>
  // </React.StrictMode>
);


reportWebVitals();
