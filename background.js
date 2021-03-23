chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: 'https://www.wearedevelopers.com/live'};
  },
  {urls: ["*://*.facebook.com/*"]},
  ["blocking"]
);
