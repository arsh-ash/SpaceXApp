import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {storeCreater} from './store';
import { Provider } from 'react-redux';

const store=storeCreater();
ReactDOM.render(
   <Provider store={store}>
       <React.StrictMode>
         <App />
      </React.StrictMode>
      </Provider>,
  document.getElementById('root')
);


