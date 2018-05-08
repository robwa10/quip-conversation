(function (document) {
	'use strict';
	const myElements = document.getElementsByClassName('document-chat-hide');
	const el = myElements.length >= 1 ? myElements[0] : null;
	if (el != null) {
		const closeConversation = function (elem) {
			const evt = new MouseEvent('click', {
				bubbles: true,
				cancelable: false,
				view: window
			});
			elem.dispatchEvent(evt);
		};
		closeConversation(el);
	}
})(document);
