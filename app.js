var express                 = require("express"),
    app                     = express(),
    server                  = require("http").createServer(app),
    bodyParser              = require("body-parser"),
    http                    = require("http"),
    fs                      = require("fs"),
    config                  = require("config"),
    mongoose                = require("mongoose"),
    utils                   = require("./lib/utils"),
    mongooseConnection      = utils.connectToDatabase(mongoose, config.db)
    Eventbrite              = require('eventbrite'),
    request                 = require("request");

app.set('port', 3000);
server.listen(3000);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser());
app.use(bodyParser.json());

app.use(function (req, res, next){
    console.log(req.body)
    next()
})


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout: true});


require("./models/Action")(mongooseConnection);

require("./controllers/ActionController")(app, mongooseConnection);

require("./controllers/EventController")(app, mongooseConnection, require);

