'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: 'quip.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	const url = tab.url;
	const onQuipSite = url.indexOf('.quip.com/') > 0 ? true : false;
	chrome.tabs.getSelected(null, function(tab) {
		// Check if they're on Quip
		if (onQuipSite) {
			chrome.tabs.executeScript({
         file: 'contentScript.js'
       });
		}
	});
});

