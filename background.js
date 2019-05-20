'use strict';

chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.duplicate(tabs[0].id);
    });
  });
