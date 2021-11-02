'use strict'

var server=require('server');

server.get('Start',function(req,res,next){
	res.render('main/detailPage',{name:'vijay'});
	next();
	
})


module.exports=server.exports();