/* global chrome */
import React from 'react';

const requestAccess = e => {
  e.preventDefault();
  chrome.permissions.request({
    origins: ['http://*/*', 'https://*/*']
  });
};

export const Onboarding = () => {
  return (
    <>
      <h1>Enable on all sites?</h1>
      <button onClick={e => requestAccess(e)}>Grant Permissions</button>
    </>
  );
};
