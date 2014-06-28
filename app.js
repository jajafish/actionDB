var express                 = require("express"),
    app                     = express(),
    server                  = require("http").createServer(app),
    bodyParser              = require("body-parser"),
    http                    = require("http"),
    fs                      = require("fs");

app.set('port', 3000);

server.listen(3000);


app.use(express.static(__dirname + "/public"));
app.use(bodyParser());
app.use(bodyParser.json());

app.use(function (req, res, next){
    console.log(req.body)
    next()
})

app.get("/actions/new", function(req, res){
    res.render("index", {title: "hey all"});
});


app.post("/actions/create", function(req, res){
    var actionName = req.body.actionName;
    res.json({action : actionName});
});


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout: true});
