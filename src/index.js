import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { PopupComponent } from './PopupComponent';

const popupRoot = document.getElementById('popup-root');

const insertionPoint = document.createElement('div');
insertionPoint.id = 'insertion-point';
document.body.parentNode.insertBefore(insertionPoint, document.body);

// App / content script
!popupRoot &&
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('insertion-point')
  );

// PopupComponent / popup.html
popupRoot && // to suppress minified react error 200
  ReactDOM.render(
    <React.Fragment>
      <PopupComponent />
    </React.Fragment>,
    popupRoot
  );
