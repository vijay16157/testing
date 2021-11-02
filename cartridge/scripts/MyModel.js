'use-strict';

var CustomObjectMgr = require('dw/object/CustomObjectMgr');

exports.createMyObject = function createMyObject (newsletterForm){
	var co = CustomObjectMgr.createCustomObject("NewsletterSubscription",newsletterForm.email.value);
	co.custom.firstName = newsletterForm.fname.value;
	co.custom.lastName = newsletterForm.lname.value;
	
	return co;
};