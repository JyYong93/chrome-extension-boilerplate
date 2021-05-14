/* global chrome */
chrome.runtime.onInstalled.addListener(details => {
  if (details.reason === 'install') {
    chrome.tabs.create({
      url: 'onboarding.html'
    });
  }
});
