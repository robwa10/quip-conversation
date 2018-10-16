(function (window, document) {
	'use strict';
	// Main function to close the chat window
	const closeConversationWindow = function() {
		// Get the button element that closes the chat
		const buttonContainer = document.getElementsByClassName('app-nav-conversation');
		const children = buttonContainer[0].children;
		const button = children[0];
		// Get the class that contains the chat
		const chatWindowDiv = document.getElementsByClassName('document-chat');
		// If chat is open it returns a length
		if (chatWindowDiv.length) {
			const clickButton = function (elem) {
				// The close event had to be seperated into it's own function
				// or it doesn't work correctly.
				const evt = new MouseEvent('click', {
					bubbles: true,
					cancelable: false,
					view: window
				});
				elem.dispatchEvent(evt);
			};
			clickButton(button);
		}
	}

	// Quip uses uses a JS Framework so the page doesn't reload.
	// Instead we watch for a DOMmutation, which signals the page has changed.

	// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
	// Node to watch for mutations.
	var targetNode = document.getElementById('app');
	// Mutation options
	var config = { attributes: true, childList: true, subtree: true };
	// Create an observer instance linked to the callback function
	var observer = new MutationObserver(closeConversationWindow);
	// Observe target node
	observer.observe(targetNode, config);

})(window, document);
