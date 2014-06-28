var express                 = require("express"),
    app                     = express(),
    server                  = require("http").createServer(app),
    bodyParser              = require("body-parser"),
    http                    = require("http"),
    fs                      = require("fs"),
    config                  = require("config"),
    mongoose                = require("mongoose"),
    utils                   = require("./lib/utils"),
    mongooseConnection      = utils.connectToDatabase(mongoose, config.db);

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



app.get("/actions/new", function(req, res){
    res.render("index", {title: "hey all"});
});


app.post("/actions/create", function(req, res){
    var Action = mongoose.model("Action");
    var actionName = req.body.actionName;
    var newAction = new Action();
    newAction.actionName = actionName;
    newAction.save(function(err, data){
        if (err){
            res.render("error", {err: err});
        }
        else {
            var id = data.id;
            console.log("hello");
        }
    })

});


