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

exports.tiles = function(req, res){

	console.log("tiles");
	res.render('tiles');
	
};


exports.sideMenu = function(req, res){

	console.log("sideMenu");
	res.render('side-menu');
	
};

exports.search = function(req, res){
	
	console.log("search");
	
	res.redirect("/"+req.param("location"));

};