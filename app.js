
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , fs = require('fs')
  , argv = require('optimist').argv;

var app = express();

// Configuration

app.configure(function(){

  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { pretty: true });

  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express['static'](__dirname + '/public'));
  app.use(express.favicon(__dirname+'/public/images/favicon.ico'));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes


app.get('/', routes.home);
app.get('/tiles', routes.tiles);
app.get('/side-menu', routes.sideMenu);
app.get('/search', routes.search);

var port = argv.p || process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Express server listening");
});
