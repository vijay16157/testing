

'use strict';

var server = require('server');



server.get('mains',function(req,res,next){
	
	res.render('main/mainPage');
	next();
	
})



module.exports = server.exports();