var request = require('request'),
	url = require('url'),
	util = require('util'),
	fs = require('fs');

if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}

exports.home = function(req, res){

	console.log("home");
	res.render('home');
	
};

exports.product = function(req, res){

	console.log("product");
	res.render('product');
	
};
