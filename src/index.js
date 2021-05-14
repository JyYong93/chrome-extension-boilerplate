import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { PopupComponent } from './PopupComponent';
import { Onboarding } from './Components/Onboarding';

const popupRoot = document.getElementById('popup-root');

const insertionPoint = document.createElement('div');
insertionPoint.id = 'insertion-point';
document.body.parentNode.insertBefore(insertionPoint, document.body);

const onboardingRoot = document.getElementById('onboarding');

// App / content script
!popupRoot &&
  !onboardingRoot &&
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('insertion-point')
  );

// PopupComponent / popup.html
popupRoot &&
  !onboardingRoot && // to suppress minified react error 200
  ReactDOM.render(
    <React.Fragment>
      <PopupComponent />
    </React.Fragment>,
    popupRoot
  );

onboardingRoot &&
  ReactDOM.render(
    <React.StrictMode>
      <Onboarding />
    </React.StrictMode>,
    onboardingRoot
  );
