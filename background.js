'use strict';

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
