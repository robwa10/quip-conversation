(function (document) {
	'use strict';
	// Get the button to close the conversation
	const buttonContainer = document.getElementsByClassName('app-nav-conversation');
	const children = buttonContainer[0].children;
	const button = children[0];
	// Get the class that contains the chat
	const myElements = document.getElementsByClassName('has-chat');
	// If it's open length returns 1
	const el = myElements.length >= 1 ? true : false;
	if (el) {
		const closeConversation = function (elem) {
			// Get the button el that closes the convo window
			const evt = new MouseEvent('click', {
				bubbles: true,
				cancelable: false,
				view: window
			});
			elem.dispatchEvent(evt);
		};
		closeConversation(button);
	}
})(document);
