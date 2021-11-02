'use strict'

var server=require('server');
var contentMgr=require('dw/content/ContentMgr');

server.get('Start',function(req,res,next){
	var cmt=contentMgr.getContent('delta-faucet');
	res.render('main/contentPage',{cmt:cmt});
	next();
	
})





module.exports=server.exports();