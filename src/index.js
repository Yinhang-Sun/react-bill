import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import sum from '@/test';
import router from './router';
import { Provider } from 'react-redux';

// Import theme subject file 
import './theme.css'
import store from './store';

const total = sum(1,3)
console.log(total)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);